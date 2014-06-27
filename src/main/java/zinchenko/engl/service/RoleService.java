package zinchenko.engl.service;

import java.util.List;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface RoleService {

    List<String> findRolesByUsername(String login);

}
