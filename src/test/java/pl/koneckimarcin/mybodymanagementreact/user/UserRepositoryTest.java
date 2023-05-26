package pl.koneckimarcin.mybodymanagementreact.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class UserRepositoryTest {

    private UserRepository userRepository;
    private TestEntityManager entityManager;

    public UserRepositoryTest(UserRepository userRepository, TestEntityManager entityManager) {
        this.userRepository = userRepository;
        this.entityManager = entityManager;
    }

    @Test
    public void testCreateUser() {

        User user = new User();
        user.setUsername("Maja");
        user.setPassword("maja");

        User createdUser = userRepository.save(user);

        User existUser = entityManager.find(User.class, createdUser.getID());
        assertEquals(user.getUsername(), existUser.getUsername());
    }
}
