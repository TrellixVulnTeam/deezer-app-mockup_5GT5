import { Album } from './album';
import { Track } from './track';

export interface Artists {
  data: Array<Artist>;
}
export interface Artist {
  id?: number;
  name?: string;
  album?: Album[];
  nb_fan?: number;
  picture?: any;
  picture_big?: any;
  picture_medium?: any;
  picture_small?: any;
  picture_xl?: any;
  tracklist?: any;
  nb_album?: number;
  tracks?: Track[];
}
