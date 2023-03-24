package com.musify.app.Repositories;

import com.musify.app.Entities.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<UserApp,Long> {
    UserApp findByEmail(String email);
    Page<UserApp> findByUserNameContaining(String userName, Pageable pageable);
}
