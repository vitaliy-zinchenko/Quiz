package zinchenko.engl.service;

import zinchenko.engl.domain.User;

/**
 * Created by zinchenko on 26.06.14.
 */
public interface SecurityService {

    User find(String username);

}
