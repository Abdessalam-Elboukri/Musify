package com.musify.app.Services.Imp;

import com.musify.app.Entities.Artist;
import com.musify.app.Entities.ArtistCategory;
import com.musify.app.Entities.Role;
import com.musify.app.Entities.UserApp;
import com.musify.app.Repositories.ArtistRepository;
import com.musify.app.Services.ArtistService;
import org.hibernate.id.UUIDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

import static org.springframework.data.domain.PageRequest.of;

@Service

public class ArtistServiceImp implements ArtistService {

    @Autowired
    ArtistRepository artistRepository;

    @Override
    public Artist saveArtist(Artist artist) throws IllegalAccessException {
        if(artist==null){
            throw new IllegalAccessException("please fill all required Information");
        }else if(artist.getEmail()==null||
                artist.getUserName()==null||
                artist.getPhone()==null||
                artist.getPassword()==null||
                artist.getAvatar()==null||
                artist.getCountry()==null||
                artist.getArtistCategory()==null
        ){
            throw new IllegalAccessException("please fill all required Information");
        }
        artist.setArtistReference("artist"+ UUID.randomUUID());
        artist.setCreatedAt(LocalDateTime.now());
        artist.setBanned(false);
        artist.setArtist(false);
        artist.setSubscribed(false);
        return artistRepository.save(artist);

    }

    @Override
    public Artist applyToBecomeArtist(Artist artist) throws IllegalAccessException {
        if(artist==null){
            throw new IllegalAccessException("please fill all required Information");
        }else if(
                artist.getId()==null ||
                artist.getArtistCategory()==null
        ){
            throw new IllegalAccessException("please fill all required Information");
        }
        artist.setArtistReference("artist"+UUID.randomUUID());
        artist.setArtist(false);
        return artistRepository.save(artist);
    }

    @Override
    public Artist findByEmail(String email) {
        return artistRepository.findByEmail(email);
    }

    @Override
    public Page<Artist> getArtists(String userName, int page, int size) {
        return artistRepository.findArtistByUserNameContaining(userName, of(page, size));
    }

    @Override
    public Page<Artist> getArtistByCategory(ArtistCategory category, int page, int size) {
        return artistRepository.findArtistByArtistCategory(category, of(page, size));
    }
}
