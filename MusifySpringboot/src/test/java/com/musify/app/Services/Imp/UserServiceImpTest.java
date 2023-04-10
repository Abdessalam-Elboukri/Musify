package com.musify.app.Services.Imp;

import com.musify.app.Entities.Countries;
import com.musify.app.Entities.Role;
import com.musify.app.Entities.UserApp;
import com.musify.app.Repositories.RoleRepository;
import com.musify.app.Repositories.UserRepository;
import com.musify.app.Services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;

class UserServiceImpTest {

    private UserService userAppService;
    private RoleRepository roleRepository;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;


    @Test
    void testRegisterWithNullUserApp() {
        Assertions.assertThrows(IllegalAccessException.class, () -> {
            userAppService.register(null);
        }, "Please fill Your information");
    }

    @Test
    void testRegisterWithIncompleteUserApp() {
        UserApp userApp = new UserApp();
        userApp.setEmail("test@gmail.com");
        userApp.setCountry(new Countries(1,"Morocco","MA"));

        Assertions.assertThrows(IllegalAccessException.class, () -> {
            userAppService.register(userApp);
        }, "Please fill all information");
    }

    @Test
    void testRegisterWithValidUserApp() throws IllegalAccessException {
        UserApp userApp = new UserApp();
        userApp.setEmail("ueue@gmail.com");
        userApp.setPassword("password123");
        userApp.setCountry(new Countries(1,"Morocco","MA"));
        userApp.setPhone("0683273738");
        userApp.setUserName("username");

        UserApp savedUserApp = userAppService.register(userApp);

        Assertions.assertNotNull(savedUserApp);
        Assertions.assertEquals(userApp.getEmail(), savedUserApp.getEmail());
        Assertions.assertEquals(userApp.getCountry(), savedUserApp.getCountry());
        Assertions.assertEquals(userApp.getPhone(), savedUserApp.getPhone());
        Assertions.assertEquals(userApp.getUserName(), savedUserApp.getUserName());
        Assertions.assertFalse(savedUserApp.getBanned());
        Assertions.assertFalse(savedUserApp.getSubscribed());
        Assertions.assertNotNull(savedUserApp.getCreatedAt());
        Assertions.assertTrue(savedUserApp.getRoles().stream().anyMatch(role -> role.getId().equals(1L)));

        String encodedPassword = passwordEncoder.encode(userApp.getPassword());
        Assertions.assertEquals(encodedPassword, savedUserApp.getPassword());
    }
}
