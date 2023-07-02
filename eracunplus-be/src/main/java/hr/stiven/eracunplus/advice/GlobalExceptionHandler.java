package hr.stiven.eracunplus.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import hr.stiven.eracunplus.exception.GloballyHandledException;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(GloballyHandledException.class)
    public ResponseEntity<String> handleMyException(GloballyHandledException exception) {
        return ResponseEntity.status(exception.getHttpStatus()).body(exception.getMessage());
    }
	
}
