package com.kreitify.api.service;

import com.kreitify.api.models.Song;
import com.kreitify.api.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SongService {

    private final SongRepository songRepository;

    @Autowired
    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    public Optional<Song> getSongById(Long id) {
        return songRepository.findById(id);
    }

    public Song saveSong(Song song) {
        song.setAddedToPlatformDateTime(LocalDateTime.now());
        return songRepository.save(song);
    }

    public void deleteSong(Long id) {
        songRepository.deleteById(id);
    }

    public List<Song> getRecentSongs() {
        return songRepository.findAll(PageRequest.of(0, 5, Sort.by(Sort.Direction.DESC, "addedToPlatformDateTime"))).getContent();
    }

    public List<Song> getSongsByGenre(String genre) {
        // Validar que el género no sea nulo o vacío
        if (genre == null || genre.trim().isEmpty()) {
            throw new IllegalArgumentException("Genre must not be null or empty");
        }

        // Obtener las canciones por género del repositorio
        List<Song> songsByGenre = songRepository.findByGenre(genre);

        // Lógica adicional, como filtrado o transformación, si es necesario
        // Por ejemplo, solo devolver canciones con más de 100 reproducciones
        List<Song> filteredSongs = songsByGenre.stream()
                .collect(Collectors.toList());

        return filteredSongs;
    }

    public List<Song> getTop5MostPlayedSongs() {
        return songRepository.findTopSongs(PageRequest.of(0, 5));
    }
}
