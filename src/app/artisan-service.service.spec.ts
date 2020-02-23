import { TestBed } from '@angular/core/testing';

import { ArtisanServiceService } from './artisan-service.service';

describe('ArtisanServiceService', () => {
  let service: ArtisanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
