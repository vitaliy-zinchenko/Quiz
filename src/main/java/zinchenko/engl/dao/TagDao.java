package zinchenko.engl.dao;

import zinchenko.engl.domain.Tag;

import java.util.List;

public interface TagDao {

    List<Tag> findAll();

    Tag create(Tag tag);

    void remove(Tag tag);

    Tag update(Tag tag);

}
