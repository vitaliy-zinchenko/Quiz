package zinchenko.engl.service;

import java.util.List;
import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
public interface PermissionService {

    List<String> findPermissionsByLogin(String login);

}
