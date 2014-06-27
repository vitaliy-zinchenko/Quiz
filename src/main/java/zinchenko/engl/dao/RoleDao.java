package zinchenko.engl.dao;

import java.util.List;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface RoleDao {

    List<String> findRolesByUsername(String username);

}
