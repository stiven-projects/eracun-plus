package hr.stiven.eracunplus.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class GloballyHandledException extends RuntimeException{

    /**
	 * 
	 */
	private static final long serialVersionUID = -8344066538603002379L;
	
	private final HttpStatus httpStatus;

    public GloballyHandledException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

}
