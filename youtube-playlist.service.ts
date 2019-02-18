import { Injectable } from '@angular/core';
export interface IPlaylist {
  id: String;
  song: String;
}
@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {
  playlist: Array<IPlaylist> = [  {id: 'CX11yw6YL1w', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'},
    {id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}];
  constructor() { }
  find (song: String) {
    return this.playlist.find(item => item.song === song);
  }
}
