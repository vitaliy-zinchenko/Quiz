package zinchenko.engl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.engl.dao.CategoryDao;
import zinchenko.engl.domain.Category;
import zinchenko.engl.service.CategoryService;

import java.util.List;

/**
 * Created by zinchenko on 28.06.14.
 */
@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryDao categoryDao;

    @Override
    public List<Category> findAll() {
        return categoryDao.findAll();
    }

    @Override
    public Category find(Long id) {
        return categoryDao.find(id);
    }

    public CategoryDao getCategoryDao() {
        return categoryDao;
    }

    public void setCategoryDao(CategoryDao categoryDao) {
        this.categoryDao = categoryDao;
    }
}
