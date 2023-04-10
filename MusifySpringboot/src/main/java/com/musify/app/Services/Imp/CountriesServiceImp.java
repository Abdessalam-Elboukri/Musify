package com.musify.app.Services.Imp;

import com.musify.app.Entities.Countries;
import com.musify.app.Repositories.CountriesRepository;
import com.musify.app.Services.CountriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CountriesServiceImp implements CountriesService {

    @Autowired
    CountriesRepository countriesRepository;

    @Override
    public List<Countries> getAllCountries() {
        return countriesRepository.findAll();
    }

    @Override
    public Countries findByIso(String iso) {
        return countriesRepository.findByIso(iso);
    }
}
