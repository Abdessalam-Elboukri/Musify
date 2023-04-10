package com.musify.app.Repositories;

import com.musify.app.Entities.Artist;
import com.musify.app.Entities.ArtistCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ArtistRepository extends JpaRepository<Artist,Long> {
    Artist findByEmail(String email);
    Page<Artist> findArtistByUserNameContaining(String userName, Pageable pageable);
    Page<Artist> findArtistByArtistCategory(ArtistCategory artistCategory, Pageable pageable);
}
