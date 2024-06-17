package com.kreitify.api.controllers;

import com.kreitify.api.models.Song;
import com.kreitify.api.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/songs")
public class SongController {

    private final SongService songService;

    @Autowired
    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping
    public List<Song> getAllSongs() {
        return songService.getAllSongs();
    }

    @GetMapping("/recent")
    public List<Song> getRecentSongs() {
        return songService.getRecentSongs();
    }

    @GetMapping("/most-played")
    public List<Song> getTop5MostPlayedSongs() {
        return songService.getTop5MostPlayedSongs();
    }

    @GetMapping("/{id}")
    public Song getSongById(@PathVariable Long id) {
        return songService.getSongById(id)
                .orElseThrow(() -> new RuntimeException("Song not found with id: " + id));
    }

    @PostMapping
    public Song saveSong(@RequestBody Song song) {
        return songService.saveSong(song);
    }

    @DeleteMapping("/{id}")
    public void deleteSong(@PathVariable Long id) {
        songService.deleteSong(id);
    }

    @GetMapping("/genre/{genre}")
    public List<Song> getSongsByGenre(@PathVariable String genre) {
        return songService.getSongsByGenre(genre);
    }
}


