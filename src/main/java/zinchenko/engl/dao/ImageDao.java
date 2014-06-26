package zinchenko.engl.dao;

import zinchenko.engl.domain.Image;

import java.util.List;

public interface ImageDao {

    List<Image> findAll();

    void save(Image image);

    void delete(Long id);

    Image find(Long id);

}
