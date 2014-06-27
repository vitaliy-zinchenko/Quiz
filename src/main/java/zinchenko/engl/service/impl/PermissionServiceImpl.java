package zinchenko.engl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.engl.dao.PermissionDao;
import zinchenko.engl.service.PermissionService;

import java.util.List;
import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionDao permissionDao;

    @Override
    public List<String> findPermissionsByLogin(String login) {
        return permissionDao.findPermissionsByLogin(login);
    }

    public PermissionDao getPermissionDao() {
        return permissionDao;
    }

    public void setPermissionDao(PermissionDao permissionDao) {
        this.permissionDao = permissionDao;
    }
}
