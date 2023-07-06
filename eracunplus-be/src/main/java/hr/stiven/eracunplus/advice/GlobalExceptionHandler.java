package hr.stiven.eracunplus.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import hr.stiven.eracunplus.exception.GloballyHandledException;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(GloballyHandledException.class)
    public ResponseEntity<String> handleMyException(GloballyHandledException exception) {
        return ResponseEntity.status(exception.getHttpStatus()).body(exception.getMessage());
    }
	
    @ExceptionHandler(BindException.class)
    public ResponseEntity<?> handleBindException(BindException ex) {
        BindingResult bindingResult = ex.getBindingResult();
        return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
    }
	
}
