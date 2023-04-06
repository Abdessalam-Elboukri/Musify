package com.musify.app.Repositories;


import com.musify.app.Entities.Countries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountriesRepository extends JpaRepository<Countries,Long> {
    Countries findByIso(String iso);
}
