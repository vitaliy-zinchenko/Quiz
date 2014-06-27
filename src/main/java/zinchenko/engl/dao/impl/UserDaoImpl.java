package zinchenko.engl.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import zinchenko.engl.dao.UserDao;
import zinchenko.engl.domain.User;

/**
 * Created by zinchenko on 27.06.14.
 */
@Repository
public class UserDaoImpl implements UserDao{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public User findByLogin(String login) {
        return (User) sessionFactory.getCurrentSession()
                .createQuery("from User u where u.login = :login")
                .setString(User.LOGIN, login).uniqueResult();
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
