import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../../mockup-data/artists';
import { ArtistService } from '../../services/artist/artist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
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
