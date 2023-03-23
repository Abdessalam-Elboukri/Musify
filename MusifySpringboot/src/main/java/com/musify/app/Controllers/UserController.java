package com.musify.app.Controllers;

import com.musify.app.Security.JwtUtils;
import com.musify.app.Services.UserService;
import com.musify.app.Utils.Dto.AuthRequest;
import com.musify.app.Utils.Dto.ResponseDto;
import com.musify.app.Utils.Dto.UserAppDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    private final JwtUtils jwtUtils;


    public UserController(UserService userService,
                          JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/singup")
    public UserAppDto signup(@RequestBody UserAppDto userAppDto) throws IllegalAccessException {
        if(userAppDto==null){
            throw new IllegalAccessException("please fill all information");
        }else{
            return userService.register(userAppDto);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> auth(@RequestBody AuthRequest request){
        //authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        UserDetails user = userService.findByEmail(request.getEmail());
        if(user != null) {
            System.out.println(jwtUtils.generateToken(user));
            return ResponseEntity.ok(new ResponseDto("success","token",jwtUtils.generateToken(user)));
        }else
            return ResponseEntity.status(400).body(new ResponseDto("bad request","user not found"));
    }
}
