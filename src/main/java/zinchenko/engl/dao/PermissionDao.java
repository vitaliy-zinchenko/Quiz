package zinchenko.engl.dao;

import java.util.List;
import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface PermissionDao {

    List<String> findPermissionsByLogin(String login);

}
