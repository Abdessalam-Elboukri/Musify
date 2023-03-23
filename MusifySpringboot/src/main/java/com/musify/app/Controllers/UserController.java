package com.musify.app.Controllers;

import com.musify.app.Dto.AuthRequest;
import com.musify.app.Dto.ResponseDto;
import com.musify.app.Entities.UserApp;
import com.musify.app.Middleware.JwtUtils;
import com.musify.app.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/singup")
    public UserApp signup(@RequestBody UserApp userApp) throws IllegalAccessException {
        if(userApp==null){
            throw new IllegalAccessException("please fill all information");
        }else{
            return userService.register(userApp);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> auth(@RequestBody AuthRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        UserDetails user = userService.findByEmail(request.getEmail());
        if(user != null) {
            System.out.println(jwtUtils.generateToken(user));
            return ResponseEntity.ok(new ResponseDto("success","token",jwtUtils.generateToken(user)));
        }else
            return ResponseEntity.status(400).body(new ResponseDto("bad request","user not found"));
    }
}
