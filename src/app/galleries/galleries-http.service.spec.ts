import { TestBed } from '@angular/core/testing';

import { GalleriesHttpService } from './galleries-http.service';

describe('GalleriesHttpService', () => {
  let service: GalleriesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleriesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
