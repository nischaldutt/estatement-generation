import { TestBed } from '@angular/core/testing';

import { FakeUserImageService } from './fake-user-image.service';

describe('FakeUserImageService', () => {
  let service: FakeUserImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeUserImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
