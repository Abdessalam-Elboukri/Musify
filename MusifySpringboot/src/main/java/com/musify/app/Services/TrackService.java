package com.musify.app.Services;

import com.musify.app.Entities.Track;
import com.musify.app.Entities.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

public interface TrackService {

    String saveTrack(Track track, MultipartFile trackFile, MultipartFile trackAvatar) throws IllegalAccessException;

    Page<Track> getTracks(String track, int page, int size);
}
