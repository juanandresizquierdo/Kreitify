import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../service/song.service';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
  songId: string;
  song: Song | undefined;

  constructor(private route: ActivatedRoute, private songService: SongService) {
    this.songId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.songService.getSongById(this.songId).subscribe({
      next: (data) => {
        this.song = data;
        console.log('Datos de la canción recibidos:', this.song);
      },
      error: (error) => {
        console.error('Error al obtener los detalles de la canción:', error);
      }
    });
  }
}
