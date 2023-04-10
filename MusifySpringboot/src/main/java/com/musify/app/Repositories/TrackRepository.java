package com.musify.app.Repositories;

import com.musify.app.Entities.Album;
import com.musify.app.Entities.Track;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrackRepository extends JpaRepository<Track,Long> {


    Page<Track> findTracksByTrackNameContaining(String trackName, Pageable pageable);

    List<Track> findByAlbum(Album album);
}
