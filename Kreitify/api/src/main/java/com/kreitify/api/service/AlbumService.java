package com.kreitify.api.service;

import com.kreitify.api.models.Album;
import com.kreitify.api.repositories.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlbumService {

    private final AlbumRepository albumRepository;

    @Autowired
    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    public Optional<Album> getAlbumById(Long id) {
        return albumRepository.findById(id);
    }

    public Album saveAlbum(Album album) {
        return albumRepository.save(album);
    }

    public Album updateAlbum(Long id, Album updatedAlbum) {
        // Buscar el álbum por su ID
        Optional<Album> optionalAlbum = albumRepository.findById(id);
        if (optionalAlbum.isPresent()) {
            Album existingAlbum = optionalAlbum.get();
            // Actualizar los campos del álbum existente con los valores del álbum actualizado
            existingAlbum.setTitle(updatedAlbum.getTitle());
            existingAlbum.setArtist(updatedAlbum.getArtist());
            existingAlbum.setRelease_year(updatedAlbum.getRelease_year());
            existingAlbum.setImage(updatedAlbum.getImage());
            // Guardar el álbum actualizado en la base de datos
            return albumRepository.save(existingAlbum);
        } else {
            throw new RuntimeException("Album not found with id: " + id);
        }
    }

    public void deleteAlbum(Long id) {
        albumRepository.deleteById(id);
    }
}
