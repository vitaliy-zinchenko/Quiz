package zinchenko.engl.controllers.config;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zinchenko on 26.06.14.
 */
public class FileConfig {

    private Map<String, String> entities = new HashMap<>();

    private String filePath;

    public String getEntityPath(String entityName){
        return entities.get(entityName);
    }

    public Map<String, String> getEntities() {
        return entities;
    }

    public void setEntities(Map<String, String> entities) {
        this.entities = entities;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
}
