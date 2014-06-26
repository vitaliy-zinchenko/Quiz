package zinchenko.engl.controllers;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sun.security.provider.certpath.OCSPResponse;
import zinchenko.engl.bean.LoginBean;

/**
 * Created by zinchenko on 26.06.14.
 */
@Controller
@RequestMapping("/security")
public class SecurityController {

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void login(@RequestBody LoginBean loginBean) {
        System.out.println("login");
//        Subject subject = SecurityUtils.getSubject();
//        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
//        subject.login(token);
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public void logout() {
        System.out.println("logout");
//        Subject subject = SecurityUtils.getSubject();
//        subject.logout();
    }

}
