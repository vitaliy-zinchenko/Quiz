package zinchenko.engl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.engl.bean.ClientSideConfig;
import zinchenko.engl.dao.UserDao;
import zinchenko.engl.domain.User;
import zinchenko.engl.service.ClientSideService;
import zinchenko.engl.service.SecurityService;

import java.util.Properties;

/**
 * Created by zinchenko on 28.06.14.
 */
@Service
public class ClientSideServiceImpl implements ClientSideService {

    @Autowired
    @Qualifier("clientSideProperties")
    private Properties clientSideProperties;

    @Autowired
    private UserDao userDao;

    @Autowired
    private SecurityService securityService;

    @Override
    @Transactional
    public ClientSideConfig getClientSideConfig() {
        ClientSideConfig clientSideConfig = new ClientSideConfig();
        clientSideConfig.setEnvironment(clientSideProperties);
        clientSideConfig.setUser(getUser());
        return clientSideConfig;
    }

    private User getUser(){
        String login = securityService.getCurrentLogin();
        if (login == null) {
            return null;
        }
        User user = userDao.findByLogin(login);
        return user;
    }

    public Properties getClientSideProperties() {
        return clientSideProperties;
    }

    public void setClientSideProperties(Properties clientSideProperties) {
        this.clientSideProperties = clientSideProperties;
    }

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    public SecurityService getSecurityService() {
        return securityService;
    }

    public void setSecurityService(SecurityService securityService) {
        this.securityService = securityService;
    }
}
