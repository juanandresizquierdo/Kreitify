import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genreSource = new BehaviorSubject<string>('');
  currentGenre = this.genreSource.asObservable();

  constructor() { }

  changeGenre(genre: string) {
    this.genreSource.next(genre);
  }
}
