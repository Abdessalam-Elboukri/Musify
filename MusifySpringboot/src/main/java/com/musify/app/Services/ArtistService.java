package com.musify.app.Services;

import com.musify.app.Entities.Album;
import com.musify.app.Entities.Artist;
import com.musify.app.Entities.ArtistCategory;
import com.musify.app.Entities.UserApp;
import org.springframework.data.domain.Page;

public interface ArtistService {

    Artist saveArtist(Artist artist) throws IllegalAccessException;
    Artist applyToBecomeArtist(Artist artist) throws IllegalAccessException;
    Artist findByEmail(String email);
    Page<Artist> getArtists(String userName, int page, int size);

    Page<Artist> getArtistByCategory(ArtistCategory category , int page, int size);
}
