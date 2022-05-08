import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistPageComponent } from '../artist-page/artist-page.component';
import { SearchPageComponent } from './search-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    children: [
      {
        path: ':id',
        component: ArtistPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
