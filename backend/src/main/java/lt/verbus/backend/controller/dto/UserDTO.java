package lt.verbus.backend.controller.dto;

import lombok.Getter;
import lombok.Setter;
import lt.verbus.backend.entity.Role;
import lt.verbus.backend.entity.User;

import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String username;
    private String name;
    private String lastname;
    private Set<String> roles;

    public UserDTO(User user) {
        this.id=user.getId();
        this.username=user.getUsername();
        this.name = user.getName();
        this.lastname = user.getLastname();
        this.roles=user.getRoles().stream()
                .map(Role::getRoleName)
                .collect(Collectors.toSet());

    }
}
