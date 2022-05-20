import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist, Artists } from 'src/app/interfaces/artist-details';
import { ARTISTS } from '../../mockup-data/artists';
import { ArtistService } from '../../services/artist/artist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //artists = ARTISTS;
  artists: Artist[] = [];
  //artists: any;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(): void {
    //TODO:-> Update artists data based on search -> add state management
    if (!Array.isArray(this.artistService.allArtists)) {
      this.artistService.getArtists('').subscribe((res: Artists) => {
        console.log(res);

        this.artists = res.data;
      });
    }
  }
}
