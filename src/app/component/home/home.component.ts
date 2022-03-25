import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicServiceService } from 'src/app/services/music-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.html', './home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Assignment Music Player';
  constructor(
    private _musicService: MusicServiceService,
    private _router: Router
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  musicData: any;
  ngOnInit(): void {
    this.musicData = this._musicService.getMusic();
  }

  navigateToMusicPlayer() {
    this._router.navigate(['/music']);
  }
}
