package zinchenko.engl.dao;

import zinchenko.engl.bean.Tag;

import java.io.Serializable;
import java.util.List;

public interface TagDao {

    List<Tag> findAll();

    Tag create(Tag tag);

    void remove(Tag tag);

    Tag update(Tag tag);

}
