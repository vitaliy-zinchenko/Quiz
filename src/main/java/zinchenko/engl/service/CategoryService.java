package zinchenko.engl.service;

import zinchenko.engl.domain.Category;

import java.util.List;

/**
 * Created by zinchenko on 28.06.14.
 */
public interface CategoryService {

    List<Category> findAll();

    Category find(Long id);

}
