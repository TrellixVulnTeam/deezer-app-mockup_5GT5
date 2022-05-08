import { Artist } from '../interfaces/artist-details';

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'Burna Boy',
    album: [
      {
        id: 1,
        title: 'African Giant',
        year: 2019,
        trackCount: 10,
        artwork: null,
      },
    ],
    fansCount: 930000,
    artwork: '/assets/images/artists/burna-boy.png',
    tracks: [
      {
        id: 1,
        title: 'In my room',
        duration: '02:54',
      },
      {
        id: 2,
        title: 'You and I',
        duration: '04:00',
      },
      {
        id: 3,
        title: 'Don"t you know',
        duration: '02:00',
      },
      {
        id: 4,
        title: 'Flinestones',
        duration: '03:50',
      },
      {
        id: 5,
        title: 'Here comes the sun',
        duration: '04:24',
      },
    ],
  },
  {
    id: 2,
    name: 'Adekune Gold',
    album: [
      {
        id: 1,
        title: 'Happy durations',
        year: 2021,
        trackCount: 10,
        artwork: null,
      },
    ],
    fansCount: 63000,
    artwork: '/assets/images/artists/adekune-gold.png',
    tracks: [
      {
        id: 1,
        title: 'In my room',
        duration: '02:54',
      },
      {
        id: 2,
        title: 'You and I',
        duration: '04:00',
      },
      {
        id: 3,
        title: 'Don"t you know',
        duration: '02:00',
      },
      {
        id: 4,
        title: 'Flinestones',
        duration: '03:50',
      },
      {
        id: 5,
        title: 'Here comes the sun',
        duration: '04:24',
      },
    ],
  },
  {
    id: 3,
    name: 'Bruno Mars',
    album: [
      {
        id: 1,
        title: 'Strings of my guitar',
        year: 2012,
        trackCount: 10,
        artwork: null,
      },
    ],
    fansCount: 1280000,
    artwork: null,
    tracks: [
      {
        id: 1,
        title: 'In my room',
        duration: '02:54',
      },
      {
        id: 2,
        title: 'You and I',
        duration: '04:00',
      },
      {
        id: 3,
        title: 'Don"t you know',
        duration: '02:00',
      },
      {
        id: 4,
        title: 'Flinestones',
        duration: '03:50',
      },
      {
        id: 5,
        title: 'Here comes the sun',
        duration: '04:24',
      },
    ],
  },
];
