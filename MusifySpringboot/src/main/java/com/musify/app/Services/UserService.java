package com.musify.app.Services;


import com.musify.app.Entities.UserApp;
import com.musify.app.Utils.Dto.UserAppDto;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDetails findByEmail(String email);
    UserAppDto register(UserAppDto userApp) throws IllegalAccessException;
}
