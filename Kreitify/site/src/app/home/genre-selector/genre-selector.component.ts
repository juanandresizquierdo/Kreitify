import { Component } from '@angular/core';
import { GenreService } from '../../home/genre.service';

@Component({
  selector: 'app-genre-selector',
  template: `

  
    <select [(ngModel)]="selectedGenre" (change)="changeGenre(selectedGenre)">
    <option value="">Todos los estilos</option>
    <option value="Classical">Clásica</option>
    <option value="Hip-Hop">Hip-Hop</option>
    <option value="Pop">Pop</option>
    <option value="Rock">Rock</option>
    <option value="Jazz">Jazz</option>
    <option value="Salsa">Salsa</option>
    </select>
  `
})
export class GenreSelectorComponent {
  selectedGenre: string = '';

  constructor(private genreService: GenreService) { }

  changeGenre(genre: string): void {
    this.genreService.changeGenre(genre);
  }
}