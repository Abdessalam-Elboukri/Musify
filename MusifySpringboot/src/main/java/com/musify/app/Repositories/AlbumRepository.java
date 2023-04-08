package com.musify.app.Repositories;

import com.musify.app.Entities.Album;
import com.musify.app.Entities.Artist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album,Long> {
        Page<Album> findByAlbumNameContaining(String albumName, Pageable pageable);
        Page<Album> findAlbumsByArtistAndAlbumNameContaining(Artist artist, String albumName, Pageable pageable);

        List<Album> findByArtist(Artist artist);

        Album findByAlbumRefrence(String albumRefrence);
}
