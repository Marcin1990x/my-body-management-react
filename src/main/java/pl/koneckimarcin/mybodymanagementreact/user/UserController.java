package pl.koneckimarcin.mybodymanagementreact.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("user")
    public User addUser(@RequestBody User user) {
        User newUser = userRepository.save(user);
        return newUser;
    }

}
