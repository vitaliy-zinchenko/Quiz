package zinchenko.engl.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import zinchenko.engl.domain.Test;
import zinchenko.engl.dao.TestDao;

@Repository
public class TestDaoImpl implements TestDao{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public Test find(Long id) {
        return (Test) sessionFactory.getCurrentSession()
                .createQuery("select distinct t from Test t where t.id = :id")
                .setLong("id", id).uniqueResult();
    }

    @Override
    public Test save(Test test) {
        sessionFactory.getCurrentSession().save(test);
        return test;
    }

    @Override
    public Test update(Test test) {
        sessionFactory.getCurrentSession().update(test);
        return test;
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
