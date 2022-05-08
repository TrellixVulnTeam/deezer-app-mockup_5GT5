import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  artist = '';

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {}

  search(value: string): void {
    //TODO:-> Add debounce time
    this.artistService.getArtists(value);
  }
}
