package zinchenko.engl.security;

import java.text.MessageFormat;

/**
 * Created by zinchenko on 26.06.14.
 */
public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String username) {
        super(MessageFormat.format("The user '{0}' wasn't found", username));
    }
}
