package zinchenko.engl.service;

import zinchenko.engl.domain.User;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface UserService {

    User findByLogin(String login);

}
