export class Album {
    id: number;
    title: string;  
    artist: string;
    release_year: number;
    image: string;
    playCount: number;
  
    constructor(id: number, title: string, artist: string, release_year: number, image: string, playCount: number) {
      this.id = id;
      this.title = title;
      this.artist = artist;
      this.release_year = release_year;
      this.image = image;
      this.playCount = playCount;
    }
  }
    
  