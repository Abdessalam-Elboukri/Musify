package com.musify.app.Controllers;

import  com.musify.app.Dto.AuthRequest;
import com.musify.app.Dto.ResponseDto;
import com.musify.app.Entities.Countries;
import com.musify.app.Entities.HttpResponse;
import com.musify.app.Entities.UserApp;
import com.musify.app.Middleware.JwtUtils;
import com.musify.app.Services.CountriesService;
import com.musify.app.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    CountriesService countriesService;

    @PostMapping("/signup")
    public ResponseDto signup(@RequestBody UserApp userApp) throws IllegalAccessException {

        if(userApp==null){
            throw new IllegalAccessException("please fill all information");
        }
        System.out.println(userApp.getCountry());
        Countries country = countriesService.findByIso(userApp.getCountry().getIso());
        if(country==null){
            throw new IllegalAccessException("Something went wrong");
        }
            userApp.setCountry(country);
            System.out.println("=============signup");
            return new ResponseDto("200","Signup",userService.register(userApp)) ;
    }

    @PostMapping("/login")
    public ResponseEntity<Object> auth(@RequestBody AuthRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        UserDetails user = userService.findByEmail(request.getEmail());
        if(user != null) {
            System.out.println(jwtUtils.generateToken(user));
            return ResponseEntity.ok(new ResponseDto("success","token",jwtUtils.generateToken(user)));
        }else
            return ResponseEntity.status(400).body(new ResponseDto("bad request","Your credentials are incorrect"));
    }

    @GetMapping("/all-users")
    public ResponseEntity<HttpResponse>getUsers(@RequestParam Optional<String> userName,
                                                @RequestParam Optional<Integer> page,
                                                @RequestParam Optional<Integer> size) throws InterruptedException {
        return ResponseEntity.ok().body(
                HttpResponse.builder()
                        .timeStamp(now().toString())
                        .data(of("page", userService.getUsers(userName.orElse(""), page.orElse(0), size.orElse(10))))
                        .message("Users Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build());

    }

    @GetMapping("get-one/{email}")
    public ResponseDto getByEmail(@PathVariable String email ){
        UserApp user=userService._findByEmail(email);
        if(user==null){
            return new ResponseDto("500","no user found with that email");
        }
        else {
            return new ResponseDto("200", "User Found", user);
        }
    }
}
