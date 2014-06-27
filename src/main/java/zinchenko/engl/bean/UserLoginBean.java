package zinchenko.engl.bean;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by zinchenko on 26.06.14.
 */
public class UserLoginBean {

    @NotEmpty
    @Length(max = 20)
    private String username;

    @NotEmpty
    @Length(max = 20)
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
