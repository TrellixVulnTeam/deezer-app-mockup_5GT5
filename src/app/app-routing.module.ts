import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

//TODO:-> Fix router outlet issue
const routes: Routes = [
  {
    path: '',
    redirectTo: 'artist',
    pathMatch: 'full',
  },
  {
    path: 'artist',
    loadChildren: () =>
      import('./search-page/search-page.module').then(
        (m) => m.SearchPageModule
      ),
  },
  // {
  //   path: '',
  //   redirectTo: 'artist',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'artist',
  //   loadChildren: () =>
  //     import('./search-page/search-page.module').then(
  //       (m) => m.SearchPageModule
  //     ),
  // },
  // {
  //   path: 'artist',
  //   loadChildren: () =>
  //     import('./artist-page/artist-page.module').then(
  //       (m) => m.ArtistPageModule
  //     ),
  // },
  // children: [
  //   {
  //     path: 'search',
  //     loadChildren: () =>
  //       import('./search-page/search-page.module').then(
  //         (m) => m.SearchPageModule
  //       ),
  //   },
  //   {
  //     path: 'artist',
  //     loadChildren: () =>
  //       import('./artist-page/artist-page.module').then(
  //         (m) => m.ArtistPageModule
  //       ),
  //   },
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
