package com.kreitify.api.controllers;

import com.kreitify.api.models.Album;
import com.kreitify.api.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/albums")
public class AlbumController {

    private final AlbumService albumService;

    @Autowired
    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @GetMapping("/{id}")
    public Album getAlbumById(@PathVariable Long id) {
        return albumService.getAlbumById(id)
                .orElseThrow(() -> new RuntimeException("Album not found with id: " + id));
    }

    @PostMapping
    public Album saveAlbum(@RequestBody Album album) {
        return albumService.saveAlbum(album);
    }

    @PutMapping("/{id}")
    public Album updateAlbum(@PathVariable Long id, @RequestBody Album updatedAlbum) {
        return albumService.updateAlbum(id, updatedAlbum);
    }


    @DeleteMapping("/{id}")
    public void deleteAlbum(@PathVariable Long id) {
        albumService.deleteAlbum(id);
    }
}

