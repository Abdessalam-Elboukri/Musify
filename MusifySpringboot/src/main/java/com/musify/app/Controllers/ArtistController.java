package com.musify.app.Controllers;


import com.musify.app.Dto.ResponseDto;
import com.musify.app.Entities.Artist;
import com.musify.app.Entities.ArtistCategory;
import com.musify.app.Entities.HttpResponse;
import com.musify.app.Entities.UserApp;
import com.musify.app.Services.ArtistService;
import com.musify.app.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/v1/artist")
public class ArtistController {
    @Autowired
    ArtistService artistService;
    @Autowired
    UserService userService;

    @PostMapping("/add-artist")
    public ResponseDto addArtist(@RequestBody Artist artist) throws IllegalAccessException {
        Artist artist1= artistService.saveArtist(artist);
        return new ResponseDto("200","artist added successfully", artist1);
    }

    @PostMapping("/apply-tobecome-artist")
    public ResponseDto applyToBecomeArtist(@RequestBody Artist artist) throws IllegalAccessException {
        if(artist==null){
            return new ResponseDto("500","Please all the Apply fields");
        }
        UserApp user=userService._findByEmail(artist.getEmail());
        if(user==null){
            return new ResponseDto("500","The email that you mentioned for the apply doesn't exist");
        }
        artist.setId(user.getId());
        Artist artist1= artistService.applyToBecomeArtist(artist);
        return new ResponseDto("200","Apply Requested successfully",artist1);
    }

    @PostMapping("/validate-artist/{artistId}")
    public ResponseDto validateArtist(@PathVariable Long artistId){
        return null;
    }


    @GetMapping("/all-artist")
    public ResponseEntity<HttpResponse> getUsers(@RequestParam Optional<String> userName,
                                                 @RequestParam Optional<Integer> page,
                                                 @RequestParam Optional<Integer> size) throws InterruptedException {
        return ResponseEntity.ok().body(
                HttpResponse.builder()
                        .timeStamp(now().toString())
                        .data(of("page", artistService.getArtists(userName.orElse(""), page.orElse(0), size.orElse(10))))
                        .message("Users Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build());

    }


    @GetMapping("/get-artist/{category}")
    public ResponseEntity<HttpResponse> getArtistsByCategory(
                                                 @PathVariable String category,
                                                 @RequestParam Optional<String> userName,
                                                 @RequestParam Optional<Integer> page,
                                                 @RequestParam Optional<Integer> size) throws InterruptedException {
        return ResponseEntity.ok().body(
                HttpResponse.builder()
                        .timeStamp(now().toString())
                        .data(of("page", artistService.getArtistByCategory(ArtistCategory.valueOf(category), page.orElse(0), size.orElse(10))))
                        .message("Users Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build());

    }


}
