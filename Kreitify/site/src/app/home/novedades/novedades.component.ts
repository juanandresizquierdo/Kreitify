import { Component } from '@angular/core';
import { SongService } from '../../service/song.service';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent {

  songs: any[] = [];
  styleSelected: string = '';

  constructor(public genreService: GenreService, private songService: SongService) { }

  ngOnInit(): void {
    this.genreService.currentGenre.subscribe(genre => {
      this.styleSelected = genre;
      this.loadSongs();
    });
  }

  loadSongs(): void {
    if (this.styleSelected) {
      this.songService.getSongsByStyle(this.styleSelected).subscribe({
        next: (data) => {
          this.songs = data.slice(0, 5); // Asegurarse de tomar solo las 5 más recientes
        },
        error: (error) => {
          console.error('Error al obtener las canciones por estilo:', error);
        }
      });
    } else if(this.styleSelected === '') {
      this.loadAllSongs();
    }
  }

  private loadAllSongs(): void {
    this.songService.getRecentSongs().subscribe({
      next: (data) => {
        this.songs = data.slice(0, 5); // Solo las 5 más recientes
      },
      error: (error) => {
        console.error('Error al obtener las canciones:', error);
      }
    });
  }
}
