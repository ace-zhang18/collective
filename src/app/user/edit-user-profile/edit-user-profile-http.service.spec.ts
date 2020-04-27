import { TestBed } from '@angular/core/testing';

import { EditUserProfileHttpService } from './edit-user-profile-http.service';

describe('EditUserProfileHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditUserProfileHttpService = TestBed.get(EditUserProfileHttpService);
    expect(service).toBeTruthy();
  });
});
