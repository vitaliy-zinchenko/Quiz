package zinchenko.engl.bean;

import zinchenko.engl.domain.User;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class ClientSideConfig {

    private Properties environment;

    private User user;

    private Map<String, Object> customConfigs = new HashMap<>();

    public ClientSideConfig addCustomConfig(String key, Object value){
        customConfigs.put(key, value);
        return this;
    }

    public Properties getEnvironment() {
        return environment;
    }

    public void setEnvironment(Properties environment) {
        this.environment = environment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Map<String, Object> getCustomConfigs() {
        return customConfigs;
    }

    public void setCustomConfigs(Map<String, Object> customConfigs) {
        this.customConfigs = customConfigs;
    }
}
