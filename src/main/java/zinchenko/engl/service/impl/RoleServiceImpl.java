package zinchenko.engl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.engl.dao.RoleDao;
import zinchenko.engl.service.RoleService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by zinchenko on 27.06.14.
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    @Override
    @Transactional
    public List<String> findRolesByUsername(String login) {
        return roleDao.findRolesByUsername(login);
    }

    public RoleDao getRoleDao() {
        return roleDao;
    }

    public void setRoleDao(RoleDao roleDao) {
        this.roleDao = roleDao;
    }
}
