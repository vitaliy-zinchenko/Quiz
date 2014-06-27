package zinchenko.engl.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import zinchenko.engl.dao.PermissionDao;
import zinchenko.engl.domain.User;

import java.util.List;
import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
@Repository
public class PermissionDaoImpl implements PermissionDao {

    @Autowired
    private SessionFactory sessionFactory;

    public List<String> findPermissionsByLogin(String login) {
        return (List<String>) sessionFactory.getCurrentSession()
                .createQuery("select p.permission from User u join u.role as r join r.permissions as p where u.login = :login")
                .setString(User.LOGIN, login).list();
    }

}
