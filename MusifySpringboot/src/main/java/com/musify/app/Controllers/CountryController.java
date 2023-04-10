package com.musify.app.Controllers;

import com.musify.app.Dto.ResponseDto;
import com.musify.app.Services.CountriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController@RequestMapping("/api/v1")
public class CountryController {

    @Autowired
    CountriesService countriesService;


    @GetMapping("/all-countries")
    public ResponseDto getAllCountries(){
        return new ResponseDto("200", "all countries retrieved", countriesService.getAllCountries());
    }
}
