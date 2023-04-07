package com.musify.app.Services.Imp;

import com.musify.app.Entities.Album;
import com.musify.app.Repositories.AlbumRepository;
import com.musify.app.Services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

import static org.springframework.data.domain.PageRequest.of;

@Service
public class AlbumServiceImp implements AlbumService {

    @Autowired
    AlbumRepository albumRepository;

    @Override
    public Album saveAlbum(Album album, MultipartFile avatar) throws IllegalAccessException {
        if(album==null){
            throw new IllegalAccessException("Please fill all album's information");
        } else if(album.getAlbumAvatar()==null||
                album.getAlbumName()==null||
                album.getArtist()==null
        )         {
            throw new IllegalAccessException("Please fill all required fields");
        }
        album.setAlbumRefrence("album"+ UUID.randomUUID());

        album.setIs_private(true);
        return albumRepository.save(album);
    }

    @Override
    public Page<Album> getAlbums(String album, int page, int size) {
        return albumRepository.findByAlbumNameContaining(album, of(page,size));
    }

    @Override
    public Page<Album> getAlbumsByArtist(String album, int page, int size) {
        return albumRepository.findByAlbumNameContaining(album, of(page,size));
    }
}
