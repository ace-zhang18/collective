import { TestBed } from '@angular/core/testing';

import { ThreadsHttpService } from './threads-http.service';

describe('ThreadsHttpService', () => {
  let service: ThreadsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
