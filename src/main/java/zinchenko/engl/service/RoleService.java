package zinchenko.engl.service;

import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface RoleService {

    Set<String> findRolesByUsername(String login);

}
