package zinchenko.engl.dao;

import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface RoleDao {

    Set<String> findRolesByUsername(String username);

}
