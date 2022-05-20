import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Artist, Artists } from 'src/app/interfaces/artist-details';
import { ARTISTS } from 'src/app/mockup-data/artists';

const DEEZER_API = `http://localhost:3000`;
// const CORS = `https://cors-anywhere.herokuapp.com`;
@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  allArtists: any;

  getArtists(query: string): Observable<Artists> {
    console.log('THE QUERY', query);
    let searchArtists = `${DEEZER_API}/search-artist`;

    if (query) {
      searchArtists = `${DEEZER_API}/search-artist?query=${query}`;
    }

    console.log('THE RESP:', searchArtists);
    //TODO:-> check error of data response not being of Artist data type return this.http.get<Artist[]>(searchArtists);
    return this.http.get<Artists>(searchArtists).pipe(
      map((res: Artists) => {
        console.log('THE RES', res);
        this.allArtists = res;
        return this.allArtists;
      })
    );
  }

  getArtist(id: number): Observable<Artist> {
    const searchArtist = `${DEEZER_API}/artist?id=${id}`;

    return this.http.get<Artist>(searchArtist);
  }
}
