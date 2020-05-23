import { TestBed } from '@angular/core/testing';

import { ArtworksHttpService } from './artworks-http.service';

describe('ArtworksHttpService', () => {
  let service: ArtworksHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworksHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
