import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
})
export class ArtistPageComponent implements OnInit {
  // @Input() artist: any;
  artist: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getArtistDetail(id);
  }

  getArtistDetail(id: number): void {
    this.artistService
      .getArtist(id)
      .subscribe((artist) => (this.artist = artist));
  }
}
