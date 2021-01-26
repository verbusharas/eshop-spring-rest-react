package lt.verbus.backend.controller;

import lt.verbus.backend.controller.dto.UserDTO;
import lt.verbus.backend.entity.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {


    @PostMapping("/login")
    public UserDTO login(@AuthenticationPrincipal User user) {
        return new UserDTO(user);
    }

}
