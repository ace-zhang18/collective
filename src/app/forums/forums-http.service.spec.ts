import { TestBed } from '@angular/core/testing';

import { ForumsHttpService } from './forums-http.service';

describe('ForumsHttpService', () => {
  let service: ForumsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
