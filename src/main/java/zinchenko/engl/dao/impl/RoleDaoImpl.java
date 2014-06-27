package zinchenko.engl.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import zinchenko.engl.dao.RoleDao;
import zinchenko.engl.domain.User;

import java.util.List;
import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
@Repository
public class RoleDaoImpl implements RoleDao{

    @Autowired
    private SessionFactory sessionFactory;

    public List<String> findRolesByUsername(String login) {
        return sessionFactory.getCurrentSession()
                .createQuery("select role.name from User u join u.role as role where u.login = :login")
                .setString(User.LOGIN, login).list();
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
