import { NgModule } from '@angular/core';
import { ArtistsRoutingModule } from './artists-routing.module';
import { CommonModule } from '@angular/common';
import { ShareableModule } from '../shareable/shareable.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [CommonModule, RouterModule, ShareableModule, ArtistsRoutingModule],
  providers: [],
})
export class ArtistsModule {}
