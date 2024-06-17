import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8080/api/songs';

  constructor(private http: HttpClient) { }

  getSongs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRecentSongs(): Observable<any> {
    return this.http.get('http://localhost:8080/api/songs/recent');
  }

  getSongById(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/songs/${id}`);
  }

  getSongsByStyle(genre: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/songs/genre/${genre}`);
  }

  getSongsByPlayCount(): Observable<any> {
    return this.http.get('http://localhost:8080/api/songs/most-played');
  }
}

