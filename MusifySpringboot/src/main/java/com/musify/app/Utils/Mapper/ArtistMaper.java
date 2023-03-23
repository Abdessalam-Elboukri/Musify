package com.musify.app.Utils.Mapper;


import com.musify.app.Entities.Artist;
import com.musify.app.Entities.UserApp;
import com.musify.app.Utils.Dto.ArtistDto;
import com.musify.app.Utils.Dto.UserAppDto;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@Mapper(componentModel = "spring")
public interface ArtistMaper extends EntityMapper<ArtistDto, Artist>{
}
