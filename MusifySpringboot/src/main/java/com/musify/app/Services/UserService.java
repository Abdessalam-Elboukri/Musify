package com.musify.app.Services;


import com.musify.app.Entities.UserApp;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails findByEmail(String email);
    UserApp register(UserApp userApp) throws IllegalAccessException;
}
