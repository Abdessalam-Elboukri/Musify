package com.musify.app.Utils.Mapper;


import com.musify.app.Entities.Album;
import com.musify.app.Utils.Dto.AlbumDto;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@Mapper(componentModel = "spring")
public interface AlbumMapper extends EntityMapper<AlbumDto, Album> {
}
