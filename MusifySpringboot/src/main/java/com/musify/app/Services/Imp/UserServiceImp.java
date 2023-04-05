package com.musify.app.Services.Imp;

import com.musify.app.Entities.Role;
import com.musify.app.Entities.UserApp;
import com.musify.app.Repositories.RoleRepository;
import com.musify.app.Repositories.UserRepository;
import com.musify.app.Services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.data.domain.PageRequest.of;


@Service
@Slf4j
public class UserServiceImp implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
     PasswordEncoder passwordEncoder;
    @Autowired
     RoleRepository roleRepository;


    @Override
    public UserDetails findByEmail(String email) {
        UserApp user = userRepository.findByEmail(email);
        List<GrantedAuthority> authorities = user.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
                .collect(Collectors.toList());
        return new User(user.getEmail(), user.getPassword(), authorities);
    }

    @Override
    public UserApp register(UserApp userApp) throws IllegalAccessException {
        if(userApp==null){
            throw
                    new IllegalAccessException("Please fill Your information");
        }
        else if(userApp.getEmail()==null ||
                userApp.getPassword()==null ||
                userApp.getCountry()==null ||
                userApp.getPhone()==null ||
                userApp.getUserName()==null ){
            throw
                    new IllegalAccessException("Please fill all information");
        }
        userApp.setCreatedAt(LocalDateTime.now());
        userApp.setPassword(passwordEncoder.encode(userApp.getPassword()));
        userApp.setBanned(false);
        userApp.setSubscribed(false);
        Optional<Role> userRole= roleRepository.findById(1L);
        if(userRole.isEmpty()){
            throw new IllegalAccessException("role not found");
        }else {
            userApp.getRoles().add(userRole.get());
        }
        return userRepository.save(userApp);

    }

    @Override
    public Page<UserApp> getUsers(String userName, int page, int size) {
        return userRepository.findByUserNameContaining(userName, of(page, size));
    }

    @Override
    public UserApp _findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
