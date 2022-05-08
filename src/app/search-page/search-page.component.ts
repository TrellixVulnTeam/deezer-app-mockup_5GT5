import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../mockup-data/artists';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  //artists: Artist[] = [];
  artists = ARTISTS;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService
      .getArtists('')
      .subscribe((artists) => (this.artists = artists));
  }
}
