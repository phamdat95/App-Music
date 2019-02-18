import { TestBed } from '@angular/core/testing';

import { TimeLifeService } from './time-life.service';

describe('TimeLifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeLifeService = TestBed.get(TimeLifeService);
    expect(service).toBeTruthy();
  });
});
