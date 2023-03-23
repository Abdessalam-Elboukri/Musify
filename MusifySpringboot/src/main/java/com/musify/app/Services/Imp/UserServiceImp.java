package com.musify.app.Services.Imp;

import com.musify.app.Entities.Role;
import com.musify.app.Entities.UserApp;
import com.musify.app.Repositories.UserRepository;
import com.musify.app.Services.UserService;
import com.musify.app.Utils.Dto.UserAppDto;
import com.musify.app.Utils.Mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    UserMapper userMapper;


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
    public UserAppDto register(UserAppDto userAppDto) throws IllegalAccessException {
        if(userAppDto==null){
            throw
                    new IllegalAccessException("Please fill Your information");
        }
        else if(userAppDto.getEmail()==null ||
                userAppDto.getPassword()==null ||
                userAppDto.getCountry()==null ||
                userAppDto.getPhone()==null ||
                userAppDto.getUserName()==null ){
            throw
                    new IllegalAccessException("Please fill all information");
        }
        UserApp user = userMapper.toEntity(userAppDto);
        user.setCreatedAt(LocalDateTime.now());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setBanned(false);
        user.setSubscribed(false);
        Role userRole=new Role(1,"user");
        user.getRoles().add(userRole);
        userRole.getUsers().add(user);
        user=userRepository.save(user);
        return userMapper.toDto(user);
    }
}
