package zinchenko.engl.controllers;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import zinchenko.engl.bean.UserLoginBean;
import zinchenko.engl.bean.UnknownAccountBean;
import zinchenko.engl.domain.User;
import zinchenko.engl.service.SecurityService;
import zinchenko.engl.service.UserService;

import javax.validation.Valid;

/**
 * Created by zinchenko on 26.06.14.
 */
@Controller
@RequestMapping("/security")
public class SecurityController {

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Object login(@RequestBody @Valid UserLoginBean loginBean) {
        System.out.println("login");
        try{
            Subject subject = SecurityUtils.getSubject();
            UsernamePasswordToken token = new UsernamePasswordToken(loginBean.getUsername(), loginBean.getPassword());
            subject.login(token);
        }catch (UnknownAccountException e){
            return new UnknownAccountBean();
        }
        User user = userService.findByLogin(loginBean.getUsername());
        user.cleanPassword();
        return user;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void logout() {
        System.out.println("logout");
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
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
