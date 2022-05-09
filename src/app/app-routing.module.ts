import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//TODO:-> Fix router outlet issue
const routes: Routes = [
  {
    path: '',
    redirectTo: 'artist',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./artists/artists.module').then((m) => m.ArtistsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
