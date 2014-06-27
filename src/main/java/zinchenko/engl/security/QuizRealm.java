package zinchenko.engl.security;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import zinchenko.engl.domain.User;
import zinchenko.engl.service.SecurityService;
import zinchenko.engl.service.UserService;

import java.text.MessageFormat;

/**
 * Created by zinchenko on 26.06.14.
 */
public class QuizRealm extends AuthorizingRealm {

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserService userService;

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = (String) token.getPrincipal();
        User user = userService.findByLogin(username);
        String password = String.valueOf((char[])token.getCredentials());
        if(user != null && password.equals(user.getPassword())){
            SimpleAuthenticationInfo info = new SimpleAuthenticationInfo(username, password.toCharArray(), getName());
            return info;
        }
        return null;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        return null;
    }

    public SecurityService getSecurityService() {
        return securityService;
    }

    public void setSecurityService(SecurityService securityService) {
        this.securityService = securityService;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
