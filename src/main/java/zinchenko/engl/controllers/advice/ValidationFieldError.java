package zinchenko.engl.controllers.advice;

/**
 * Created by zinchenko on 27.06.14.
 */
public class ValidationFieldError {

    private String field;

    private String message;

    public ValidationFieldError(String field, String message) {
        this.field = field;
        this.message = message;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
