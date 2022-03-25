import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicServiceService {
  constructor() {}

  musicData = [
    {
      id: '1',
      title: 'Song 1',
      imageUrl: 'assets/unsplash.jpg',
    },
    {
      id: '2',
      title: 'Song 2',
      imageUrl: 'assets/unsplash.jpg',
    },
    {
      id: '3',
      title: 'Song 3',
      imageUrl: 'assets/unsplash.jpg',
    },
    {
      id: '4',
      title: 'Song 4',
      imageUrl: 'assets/unsplash.jpg',
    },
  ];

  getMusic() {
    return this.musicData;
  }
}
