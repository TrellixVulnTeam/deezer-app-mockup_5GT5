import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { CommonModule } from '@angular/common';
import { ShareableModule } from '../shareable/shareable.module';
import { ArtistPageComponent } from '../artist-page/artist-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchPageComponent, ArtistPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareableModule,
    SearchPageRoutingModule,
  ],
  providers: [],
})
export class SearchPageModule {}
