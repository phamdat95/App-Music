import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {TimeLifeComponent} from './time-life/time-life.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';

const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryPageComponent,
  children: [{
    path: ':key',
    component: DictionaryDetailComponent
  }]
}, {
  path: 'time-life',
  component: TimeLifeComponent
}, {
  path: 'youtubelist',
  component: YoutubePlaylistComponent,
  children: [{
    path: ':song',
    component: YoutubePlayerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
