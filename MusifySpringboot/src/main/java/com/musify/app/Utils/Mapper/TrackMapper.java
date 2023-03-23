package com.musify.app.Utils.Mapper;


import com.musify.app.Entities.Track;
import com.musify.app.Entities.UserApp;
import com.musify.app.Utils.Dto.TrackDto;
import com.musify.app.Utils.Dto.UserAppDto;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@Mapper(componentModel = "spring")
public interface TrackMapper extends EntityMapper<TrackDto, Track>{
}
