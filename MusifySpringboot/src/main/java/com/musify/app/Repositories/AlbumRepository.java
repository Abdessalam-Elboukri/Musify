package com.musify.app.Repositories;

import com.musify.app.Entities.Album;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepository extends JpaRepository<Album,Long> {
        Page<Album> findByAlbumNameContaining(String albumName, Pageable pageable);

}
