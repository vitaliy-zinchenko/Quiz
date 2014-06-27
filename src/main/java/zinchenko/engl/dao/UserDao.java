package zinchenko.engl.dao;

import zinchenko.engl.domain.User;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface UserDao {

    User findByLogin(String login);

}
