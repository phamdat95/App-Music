import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IPlaylist, YoutubePlaylistService} from '../youtube-playlist.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy {
  song: IPlaylist;
  sub: Subscription;
  constructor(private youtubeService: YoutubePlaylistService,
              private activatedRouter: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const song = paramMap.get('song');
      this.song = this.youtubeService.find(song);
    });
  }
  getSrc () {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
