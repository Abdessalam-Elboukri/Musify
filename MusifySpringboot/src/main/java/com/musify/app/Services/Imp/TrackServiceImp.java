package com.musify.app.Services.Imp;

import com.musify.app.Aws.StorageConstants;
import com.musify.app.Aws.StorageService;
import com.musify.app.Entities.Album;
import com.musify.app.Entities.Track;
import com.musify.app.Entities.UserApp;
import com.musify.app.Repositories.TrackRepository;
import com.musify.app.Services.TrackService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static org.springframework.data.domain.PageRequest.of;


@Service
@Slf4j
public class TrackServiceImp implements TrackService {

    @Autowired
    TrackRepository trackRepository;

    @Autowired
    StorageService storageService;

    public final String aws_s3_trackFile_path=StorageConstants.TRACKS_FOLDER;
    private final String aws_s3_trackAvatar_path=StorageConstants.TRACKS_ALBUMS_AVATAR;



    @Override
    public String saveTrack(Track track, MultipartFile trackFile, MultipartFile trackAvatar) throws IllegalAccessException {
        if(track==null){
            throw new IllegalAccessException("Please fill all track's Information");
        }
        else if(
                track.getTrackName()==null||
                track.getAlbum()==null
    ){
            throw new IllegalAccessException("Please fill all Required fields");
        }
        try {
            //String avatarFileName=storageService.uploadFile(trackAvatar,aws_s3_trackAvatar_path);
            //String fileName=storageService.uploadFile(trackFile, aws_s3_trackFile_path);
            track.setTrackAvatar("test");
            track.setTrackUrl("test");
            track.setTrackReference("track"+"_"+ UUID.randomUUID());
            track.setCreateAt(LocalDateTime.now());
            trackRepository.save(track);
            return track.toString();
        }catch (Exception e){
           return  e.getMessage();
        }
    }



    @Override
    public Page<Track> getTracks(String track, int page, int size) {
        return trackRepository.findTracksByTrackNameContaining(track, of(page,size));
    }

    @Override
    public List<Track> getByAlbum(Album album) {
        return trackRepository.findByAlbum(album);
    }
}
