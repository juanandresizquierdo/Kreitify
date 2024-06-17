package com.kreitify.api.repositories;

import com.kreitify.api.models.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository<Album, Long> {

}

