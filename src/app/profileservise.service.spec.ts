import { TestBed, inject } from '@angular/core/testing';

import { ProfileserviseService } from './profileservise.service';

describe('ProfileserviseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileserviseService]
    });
  });

  it('should be created', inject([ProfileserviseService], (service: ProfileserviseService) => {
    expect(service).toBeTruthy();
  }));
});
