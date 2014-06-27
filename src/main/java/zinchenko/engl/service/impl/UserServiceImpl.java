package zinchenko.engl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.engl.dao.UserDao;
import zinchenko.engl.domain.User;
import zinchenko.engl.service.UserService;

/**
 * Created by zinchenko on 27.06.14.
 */
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao userDao;

    @Override
    @Transactional
    public User findByLogin(String login) {
        return userDao.findByLogin(login);
    }

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
