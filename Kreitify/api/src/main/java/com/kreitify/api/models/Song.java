package com.kreitify.api.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "api/songs")
@Data
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String artist;

    @NotBlank
    private String genre;

    @NotNull
    private Integer duration; // Duración en segundos

    @NotNull
    private Integer playCount; // Número de reproducciones

    @NotNull
    private LocalDate publicationDate; // Fecha de publicación

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime addedToPlatformDateTime; // Fecha y hora de adición a la plataforma

    @NotBlank
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "album_id")
    private Album album;

}
