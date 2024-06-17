package com.kreitify.api.repositories;

import com.kreitify.api.models.Song;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SongRepository extends JpaRepository<Song, Long> {
    List<Song> findByGenre(String genre);

    @Query("SELECT s FROM Song s ORDER BY s.playCount DESC")
    List<Song> findTopSongs(Pageable pageable);
}