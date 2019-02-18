import { TestBed } from '@angular/core/testing';

import { YoutubePlaylistService } from './youtube-playlist.service';

describe('YoutubePlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubePlaylistService = TestBed.get(YoutubePlaylistService);
    expect(service).toBeTruthy();
  });
});
