package zinchenko.engl.service.impl;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
import zinchenko.engl.domain.User;
import zinchenko.engl.service.SecurityService;

/**
 * Created by zinchenko on 26.06.14.
 */
@Service
public class SecurityServiceImpl implements SecurityService {

    @Override
    public String getCurrentLogin() {
        return String.valueOf(SecurityUtils.getSubject().getPrincipal());
    }

}
