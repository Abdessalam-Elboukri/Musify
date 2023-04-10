package com.musify.app.Services.Imp;

import com.musify.app.Aws.StorageConstants;
import com.musify.app.Aws.StorageService;
import com.musify.app.Entities.Album;
import com.musify.app.Entities.Artist;
import com.musify.app.Repositories.AlbumRepository;
import com.musify.app.Services.AlbumService;
import com.musify.app.Utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

import static org.springframework.data.domain.PageRequest.of;

@Service
public class AlbumServiceImp implements AlbumService {

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    StorageService storageService;

    private final String aws_s3_albumAvatar_path= StorageConstants.TRACKS_ALBUMS_AVATAR;

    @Override
    public Album saveAlbum(Album album, MultipartFile avatar) throws IllegalAccessException {
        if(album==null){
            throw new IllegalAccessException("Please fill all album's information");
        } else if(
                album.getAlbumName()==null||
                album.getArtist()==null
        )         {
            throw new IllegalAccessException("Please fill all required fields");
        }
       // String filename= storageService.uploadFile(avatar, aws_s3_albumAvatar_path);
       // album.setAlbumAvatar(filename);
        album.setAlbumRefrence("album"+ UUID.randomUUID());
        album.setAlbumAvatar("https://44pro.ru/wp-content/uploads/2020/10/04.jpg");
        album.setIs_private(true);
        return albumRepository.save(album);
    }

    @Override
    public Page<Album> getAlbums(String album, int page, int size) {
        return albumRepository.findByAlbumNameContaining(album, of(page,size));
    }

    @Override
    public List<Album> getAlbumsByArtist(Artist artist) {
        return albumRepository.findByArtist(artist);
    }

    @Override
    public Album getByReference(String ref) {
        return albumRepository.findByAlbumRefrence(ref);
    }
}
