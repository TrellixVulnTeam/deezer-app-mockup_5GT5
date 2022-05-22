import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackItemComponent } from './track-item/track-item.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { BannerSlideComponent } from './banner-slide/banner-slide.component';
import { AvatarComponent } from './avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { DurationPipe } from '../pipes/duration/duration.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    TrackItemComponent,
    GridItemComponent,
    BannerSlideComponent,
    AvatarComponent,
    DurationPipe,
  ],
  exports: [
    TrackItemComponent,
    GridItemComponent,
    BannerSlideComponent,
    AvatarComponent,
  ],
})
export class ShareableModule {}
