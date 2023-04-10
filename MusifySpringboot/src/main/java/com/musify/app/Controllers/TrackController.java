package com.musify.app.Controllers;


import com.musify.app.Dto.ResponseDto;
import com.musify.app.Entities.Album;
import com.musify.app.Entities.HttpResponse;
import com.musify.app.Entities.Track;
import com.musify.app.Services.AlbumService;
import com.musify.app.Services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/v1/tracks")
public class TrackController {

    @Autowired
    TrackService trackService;

    @Autowired
    AlbumService albumService;

    @Autowired
    private SimpMessagingTemplate template;

    @GetMapping("/all-tracks")
    public ResponseEntity<HttpResponse> getUsers(@RequestParam Optional<String> track,
                                                 @RequestParam Optional<Integer> page,
                                                 @RequestParam Optional<Integer> size) throws InterruptedException {

        return ResponseEntity.ok().body(
                HttpResponse.builder()
                        .timeStamp(now().toString())
                        .data(of("page", trackService.getTracks(track.orElse(""), page.orElse(0), size.orElse(10))))
                        .message("Users Retrieved")
                        .status(OK)
                        .statusCode(OK.value())
                        .build());

    }

    @PostMapping(value = {"/add-track"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseDto createTrack(@RequestParam String albumRef,
                                   @RequestPart Track track,
                                   @RequestParam("trackFile") MultipartFile trackFile,
                                   @RequestParam("trackImage") MultipartFile trackImage) throws IllegalAccessException {
        if(track==null){
            return new ResponseDto("400", "Please fill all track information");
        }
        System.out.println(albumRef+"================");
        Album album = albumService.getByReference(albumRef);
        if(album==null){
            return new ResponseDto("400", "Album that you choose ,not found");
        }
        track.setAlbum(album);
        String track1 = trackService.saveTrack(track,trackFile,trackImage);
        return  new ResponseDto("200", "track created successfully", track1);
    }

    @GetMapping("/get-by-album/{ref}")
    public ResponseDto getTracksByAlbum(@PathVariable String ref){
        Album album =albumService.getByReference(ref);
        if(album==null){
            return new ResponseDto("500", "Error in album Information");
        }
        return new ResponseDto("200", "success", trackService.getByAlbum(album));
    }

}
