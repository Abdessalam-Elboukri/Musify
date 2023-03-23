package com.musify.app.Utils.Mapper;


import com.amazonaws.services.elastictranscoder.model.Playlist;
import com.musify.app.Entities.UserApp;
import com.musify.app.Utils.Dto.PlaylistDto;
import com.musify.app.Utils.Dto.UserAppDto;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@Mapper(componentModel = "spring")
public interface PlaylistMapper extends EntityMapper<PlaylistDto, Playlist>{
}
