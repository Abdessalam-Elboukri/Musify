package com.musify.app.Utils.Mapper;


import com.musify.app.Entities.UserApp;
import com.musify.app.Utils.Dto.UserAppDto;
import org.mapstruct.* ;
import org.springframework.stereotype.Service;

@Service
@Mapper(componentModel = "spring")
public interface UserMapper extends EntityMapper<UserAppDto, UserApp> {
}
