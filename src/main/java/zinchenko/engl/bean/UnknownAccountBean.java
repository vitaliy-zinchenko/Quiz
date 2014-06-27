package zinchenko.engl.bean;

import java.io.Serializable;

/**
 * Created by zinchenko on 27.06.14.
 */
public class UnknownAccountBean implements Serializable {

    public static final String UNKNOWN_ACCOUUNT = "unknown_accouunt";

    private String error = UNKNOWN_ACCOUUNT;

    public String getError() {
        return error;
    }
}
