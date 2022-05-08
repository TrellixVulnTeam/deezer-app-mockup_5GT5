import { Album } from './album';
import { Track } from './track';

export interface Artist {
  id: number;
  name: string;
  album: Album[];
  fansCount: number;
  artwork: any;
  tracks: Track[];
}
