package zinchenko.engl.controllers;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import zinchenko.engl.controllers.config.FileConfig;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

/**
 * Created by zinchenko on 26.06.14.
 */
@Controller
@RequestMapping("/file")
public class FileController {

    @Autowired
    private FileConfig fileConfig;

    @RequestMapping(value = "/{entity}/{name:.*}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void getFile(HttpServletResponse response, @PathVariable("entity") String entity,
                        @PathVariable("name") String name)
            throws IOException{
        String fileName = fileConfig.getFilePath() + fileConfig.getEntityPath(entity) + File.separator + name;
        File file = new File(fileName);
        if(!file.exists()){
            throw new RuntimeException("Not file: " + fileName);
        }
        InputStream inputStream = new FileInputStream(file);
        OutputStream outputStream = response.getOutputStream();
        IOUtils.copy(inputStream, outputStream);
    }



}
