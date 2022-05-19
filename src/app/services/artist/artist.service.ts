import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artist } from 'src/app/interfaces/artist-details';
import { ARTISTS } from 'src/app/mockup-data/artists';

const DEEZER_API = `http://localhost:3000`;
// const CORS = `https://cors-anywhere.herokuapp.com`;
@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  getArtists(query: string): Observable<Artist[]> {
    const queryItem = query.trim();

    console.log('THE QUERY', queryItem);
    const searchArtists = `${DEEZER_API}/search-artist`;

    return this.http.get<Artist[]>(searchArtists);
  }

  getArtist(id: number): Observable<Artist> {
    // const artistUrl = `${DEEZER_API}/${id}`;

    // return this.http.get(artistUrl);
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const artist = ARTISTS.find((h) => h.data.id === id)!;
    return of(artist);
  }
}
