export class Song {
  id: number;
  title: string;  
  artist: string;
  genre: string;
  publicationDate: string;
  playCount: number;
  imageUrl: string;

  constructor(id: number, title: string, artist: string, genre: string, publicationDate: string, playCount: number, imageUrl: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.publicationDate = publicationDate;
    this.playCount = playCount;
    this.imageUrl = imageUrl;
  }
}
