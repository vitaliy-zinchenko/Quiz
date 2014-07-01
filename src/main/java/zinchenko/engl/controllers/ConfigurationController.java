package zinchenko.engl.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import zinchenko.engl.bean.ClientSideConfig;
import zinchenko.engl.service.ClientSideService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Properties;

@Controller
@RequestMapping("/config")
public class ConfigurationController {

    @Autowired
    @Qualifier("clientSideProperties")
    private Properties clientSideProperties;

    @Autowired
    private ClientSideService clientSideService;

    @RequestMapping(value = "/clientSide", method = RequestMethod.GET)
    public @ResponseBody
    ClientSideConfig getClientSideConfig(HttpServletRequest request, HttpServletResponse response){
        HttpSession session = request.getSession();
        String sessionId = session.getId();
        ClientSideConfig clientSideConfig = clientSideService.getClientSideConfig();
        clientSideConfig.addCustomConfig("sessionId", sessionId);
        return clientSideConfig;
    }

    public Properties getClientSideProperties() {
        return clientSideProperties;
    }

    public void setClientSideProperties(Properties clientSideProperties) {
        this.clientSideProperties = clientSideProperties;
    }

    public ClientSideService getClientSideService() {
        return clientSideService;
    }

    public void setClientSideService(ClientSideService clientSideService) {
        this.clientSideService = clientSideService;
    }
}
