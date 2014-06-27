package zinchenko.engl.security;

import java.text.MessageFormat;

/**
 * Created by zinchenko on 26.06.14.
 */
public class PasswordWrongException extends RuntimeException {
    public PasswordWrongException(String username, String password) {
        super(MessageFormat.format("The password '{0}' is wrong for user {1}", username, password));
    }
}
