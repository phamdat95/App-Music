import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryService} from './dictionary.service';
import {ReactiveFormsModule} from '@angular/forms';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { TimeLifeComponent } from './time-life/time-life.component';
import {TimeLifeService} from './time-life.service';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import {YoutubePlaylistService} from './youtube-playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    TimeLifeComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DictionaryService, TimeLifeService, YoutubePlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
