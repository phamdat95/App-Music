import { Component, OnInit } from '@angular/core';
import {IPlaylist, YoutubePlaylistService} from '../youtube-playlist.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.scss']
})
export class YoutubePlaylistComponent implements OnInit {
  playlist: Array<IPlaylist>;
  constructor(private list: YoutubePlaylistService) { }

  ngOnInit() {
    this.playlist = this.list.playlist;
  }
}
