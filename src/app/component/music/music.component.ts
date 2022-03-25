import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import WaveSurfer from 'wavesurfer.js';
import MultiCanvas from 'wavesurfer.js/src/drawer.multicanvas';
import WebAudio from 'wavesurfer.js/src/webaudio';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MusicComponent implements OnInit {
  wave!: WaveSurfer;
  canvas!: MultiCanvas;
  isPause: boolean = false;
  url =
    'https://ia800508.us.archive.org/15/items/LoveThemeFromTheGodfather/02LoveThemeFromTheGodfather.mp3';
  constructor(private _router: Router) {}

  ngOnInit(): void {
    if (!this.wave) {
      this.playOnLoad();
    }

    Promise.resolve()
      .then(() => this.wave.load(this.url))
      .then(() => this.wave.on('destroy', (_) => {
        this._router.navigateByUrl('/home');
      }));
  }

  playOnLoad(): void {
    Promise.resolve().then(() => {
      this.wave = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#999999',
        progressColor: '#FF3567',
        height: 200,
        maxCanvasWidth: 400,
        responsive: true,
        fillParent: true,
        cursorColor: '#888887',
        cursorWidth: 0,
        hideCursor: true,
      });
      this.wave.on('ready', () => {
        this.wave.play();
      });
    });
  }

  pausePlay(): void {
    this.isPause = !this.isPause;
    if (this.isPause) {
      this.wave.pause();
    } else {
      this.wave.play();
    }
  }

  forwardMusic() {
    this.wave.skipForward(10);
  }

  backwardMusic() {
    this.wave.skipBackward(10);
  }

  ngOnDestroy(): void {
    this.wave.destroy();
    this.wave.stop();
  }

  navigateHome() {
    this.wave.stop();
    this._router.navigate(['/home']);
  }
}
