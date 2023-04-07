package com.musify.app.Controllers;


import com.musify.app.Dto.ResponseDto;
import com.musify.app.Entities.Album;
import com.musify.app.Entities.Artist;
import com.musify.app.Entities.HttpResponse;
import com.musify.app.Services.AlbumService;
import com.musify.app.Services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/v1/albums")
public class AlbumController {

    @Autowired
    AlbumService albumService;

    @Autowired
    ArtistService artistService;



    @GetMapping("/all-albums")
    public ResponseEntity<HttpResponse> getUsers(@RequestParam Optional<String> album,
                                                 @RequestParam Optional<Integer> page,
                                                 @RequestParam Optional<Integer> size) throws InterruptedException {
        return ResponseEntity.ok().body(
                HttpResponse.builder()
                        .timeStamp(now().toString())
                        .data(of("page", albumService.getAlbums(album.orElse(""), page.orElse(0), size.orElse(10))))
                        .message("Users Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build());
    }


    @PostMapping("/add-album")
    public ResponseDto addAlbum(@RequestPart("album") Album album,
                                @RequestParam("email")  String email,
                                @RequestParam("MyFile")MultipartFile avatar) throws IllegalAccessException {
        Artist artist = artistService.findByEmail(email);
        if(artist == null){
            return new ResponseDto("500","Error with your email.");
        }
        System.out.println(album.getAlbumName());
        album.setArtist(artist);
        return new ResponseDto("200", "album has been added with successfully", albumService.saveAlbum(album,avatar));

    }



}
