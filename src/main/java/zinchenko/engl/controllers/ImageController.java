package zinchenko.engl.controllers;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import zinchenko.engl.bean.Image;
import zinchenko.engl.controllers.config.FileConfig;
import zinchenko.engl.dao.ImageDao;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/image")
public class ImageController {

    public static final String IMAGES_ENTITY_NAME = "images";
    @Autowired
    private ImageDao imageDao;

    @Value("#{main['main.fileStore']}")
    private String imageStorePath;

    @Autowired
    private FileConfig fileConfig;

    @Autowired
    private ServletContext servletContext;

    @Transactional
    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    List<Image> findAll() {
        return imageDao.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody
    Image save(HttpServletRequest request, MultipartFile file, Image image) throws IOException {
        String fileName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
        image.setFileName(fileName);
        imageDao.save(image);
        File f = new File(fileConfig.getFilePath() + fileConfig.getEntityPath(IMAGES_ENTITY_NAME) + File.separator + fileName);
        FileUtils.openOutputStream(f).write(file.getBytes());
        return image;
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public void delete(@PathVariable("id") Long id){
        Image image = imageDao.find(id);
        imageDao.delete(id);
        File f = new File(fileConfig.getFilePath() + fileConfig.getEntityPath(IMAGES_ENTITY_NAME) + File.separator + image.getFileName());
        f.delete();
    }

    public ImageDao getImageDao() {
        return imageDao;
    }

    public void setImageDao(ImageDao imageDao) {
        this.imageDao = imageDao;
    }

    public String getImageStorePath() {
        return imageStorePath;
    }

    public void setImageStorePath(String imageStorePath) {
        this.imageStorePath = imageStorePath;
    }

    public ServletContext getServletContext() {
        return servletContext;
    }

    public void setServletContext(ServletContext servletContext) {
        this.servletContext = servletContext;
    }

    public FileConfig getFileConfig() {
        return fileConfig;
    }

    public void setFileConfig(FileConfig fileConfig) {
        this.fileConfig = fileConfig;
    }
}
