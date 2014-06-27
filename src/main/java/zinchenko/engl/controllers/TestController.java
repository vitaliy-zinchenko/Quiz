package zinchenko.engl.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import zinchenko.engl.domain.Test;
import zinchenko.engl.dao.TestDao;

import javax.transaction.Transactional;
import javax.validation.Valid;

@Controller
@RequestMapping("/test")
public class TestController {

    @Autowired
    private TestDao testDao;

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody
    Test get(@PathVariable("id") Long id){
        return testDao.find(id);
    }

    @Transactional
    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody
    Test save(@RequestBody @Valid Test test){
        return testDao.save(test);
    }

    @Transactional
    @RequestMapping(method = RequestMethod.PUT)
    public @ResponseBody
    Test update(@RequestBody Test test){
        return testDao.update(test);
    }

    public TestDao getTestDao() {
        return testDao;
    }

    public void setTestDao(TestDao testDao) {
        this.testDao = testDao;
    }
}
