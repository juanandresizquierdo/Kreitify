package com.kreitify.api.models;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "albums")
@Data
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String artist;

    @NotNull
    private Integer release_year;

    @NotBlank
    @Lob
    @Column(length = 100000) // Ajusta este valor según sea necesario
    private String image;

    @OneToMany(mappedBy = "album")
    private List<Song> songs;
}
