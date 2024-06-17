import { Component, OnInit } from '@angular/core';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit {
  songs: any[] = [];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe({
      next: (data) => {
        this.songs = data;
      },
      error: (error) => {
        console.error('Error al obtener todas las canciones:', error);
      }
    });
  }
}
