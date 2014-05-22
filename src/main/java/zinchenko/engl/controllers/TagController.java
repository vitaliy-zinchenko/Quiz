package zinchenko.engl.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import zinchenko.engl.bean.Tag;
import zinchenko.engl.dao.TagDao;

import javax.transaction.Transactional;
import java.util.List;

@Controller
@RequestMapping("/tag")
public class TagController {

    @Autowired
    private TagDao tagDao;

    @Transactional
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<Tag> findAll(){
        return tagDao.findAll();
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable("id") Long id){
        Tag tag = new Tag();
        tag.setId(id);
        tagDao.remove(tag);
    }

    @Transactional
    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody Tag tag){
        tagDao.remove(tag);
    }

    public TagDao getTagDao() {
        return tagDao;
    }

    public void setTagDao(TagDao tagDao) {
        this.tagDao = tagDao;
    }
}
