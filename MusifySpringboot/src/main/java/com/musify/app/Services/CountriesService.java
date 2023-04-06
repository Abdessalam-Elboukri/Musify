package com.musify.app.Services;

import com.musify.app.Dto.ResponseDto;
import com.musify.app.Entities.Countries;

import java.util.List;


public interface CountriesService {
    List<Countries> getAllCountries();

    Countries findByIso(String iso);
}
