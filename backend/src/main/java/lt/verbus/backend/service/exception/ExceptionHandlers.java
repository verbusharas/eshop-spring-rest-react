package lt.verbus.backend.service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class ExceptionHandlers {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(FileStorageException.class)
    public ErrorResponse handleFileStorageException(FileStorageException exception) {
        // TODO: logging
        return new ErrorResponse(exception.getMessage(), LocalDateTime.now());
    }

}
