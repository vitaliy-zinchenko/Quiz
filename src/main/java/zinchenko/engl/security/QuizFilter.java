package zinchenko.engl.security;

import org.apache.shiro.web.filter.authz.HttpMethodPermissionFilter;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by zinchenko on 26.06.14.
 */
public class QuizFilter extends HttpMethodPermissionFilter {

    protected void redirectToLogin(ServletRequest request, ServletResponse response) throws IOException {
        HttpServletResponse httpResponse = WebUtils.toHttp(response);
        httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }

}
