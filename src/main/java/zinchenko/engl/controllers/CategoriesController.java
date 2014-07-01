package zinchenko.engl.controllers;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import zinchenko.engl.domain.Category;
import zinchenko.engl.dao.CategoryDao;
import zinchenko.engl.service.CategoryService;

import javax.transaction.Transactional;
import java.util.List;

@Controller
@RequestMapping("/categories")
public class CategoriesController {

    protected static final Logger LOGGER = Logger.getLogger(CategoriesController.class);

    @Autowired
    private CategoryService categoryService;

    @Transactional
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    List<Category> getAll(){
        return categoryService.findAll();
    }

    @Transactional
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody
    Category get(@PathVariable("id") Long id){
        LOGGER.debug("Retrieving category by id " + id);
        return categoryService.find(id);
    }

    public CategoryService getCategoryService() {
        return categoryService;
    }

    public void setCategoryService(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
}
