package com.musify.app.Services;


import com.musify.app.Entities.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails findByEmail(String email);
    UserApp register(UserApp userApp) throws IllegalAccessException;
    Page<UserApp> getUsers(String userName, int page, int size);
}
