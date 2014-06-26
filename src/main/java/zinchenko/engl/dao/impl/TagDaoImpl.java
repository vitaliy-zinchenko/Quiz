package zinchenko.engl.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import zinchenko.engl.domain.Tag;
import zinchenko.engl.dao.TagDao;

import java.util.List;

@Repository
public class TagDaoImpl implements TagDao{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Tag> findAll() {
        return sessionFactory.getCurrentSession()
                .createCriteria(Tag.class).list();
    }

    @Override
    public Tag create(Tag tag) {
        sessionFactory.getCurrentSession().save(tag);
        return tag;
    }

    @Override
    public void remove(Tag tag) {
        sessionFactory.getCurrentSession().delete(tag);
    }

    @Override
    public Tag update(Tag tag) {
        sessionFactory.getCurrentSession().update(tag);
        return tag;
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
