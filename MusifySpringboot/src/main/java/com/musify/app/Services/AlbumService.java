package com.musify.app.Services;

import com.musify.app.Entities.Album;
import com.musify.app.Entities.Artist;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

public interface AlbumService {

    Album saveAlbum(Album album, MultipartFile file) throws IllegalAccessException;

    Page<Album> getAlbums(String album, int page, int size);

    Page<Album> getAlbumsByArtist(String album, int page,int size);
}
