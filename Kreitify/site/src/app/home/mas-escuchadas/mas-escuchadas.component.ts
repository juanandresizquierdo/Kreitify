import { Component } from '@angular/core';
import { SongService } from '../../service/song.service'; // Asegrate de usar la ruta correcta
import { GenreService } from '../genre.service';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-mas-escuchadas',
  templateUrl: './mas-escuchadas.component.html',
  styleUrls: ['./mas-escuchadas.component.scss']
})
export class MasEscuchadasComponent {
  songs: Song[] = [];
  selectedGenre: string = '';

  constructor(private songService: SongService, private genreService: GenreService) {} // Inyección del servicio

  ngOnInit(): void {
    this.genreService.currentGenre.subscribe(genre => {
      this.selectedGenre = genre;
      this.loadMostPlayedSongs();
    });
  }

  loadMostPlayedSongs(): void {
    this.songService.getSongsByPlayCount().subscribe({
      next: (data: Song[]) => {
        if (this.selectedGenre) {
          this.songs = data.filter((song: Song) => song.genre === this.selectedGenre);
        } else {
          this.songs = data;
        }
      },
      error: (error) => {
        console.error('Error al obtener las canciones más escuchadas:', error);
      }
    });
  }
}
