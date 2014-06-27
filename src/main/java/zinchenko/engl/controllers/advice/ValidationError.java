package zinchenko.engl.controllers.advice;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by zinchenko on 27.06.14.
 */
public class ValidationError {

    private List<ValidationFieldError> serverValidationErrors = new ArrayList<>();

    public void addError(ValidationFieldError fieldError) {
        serverValidationErrors.add(fieldError);
    }

    public void addError(String field, String message) {
        addError(new ValidationFieldError(field, message));
    }

    public List<ValidationFieldError> getServerValidationErrors() {
        return serverValidationErrors;
    }

    public void setServerValidationErrors(List<ValidationFieldError> serverValidationErrors) {
        this.serverValidationErrors = serverValidationErrors;
    }
}
