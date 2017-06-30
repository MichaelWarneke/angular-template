import { TestBed, inject } from '@angular/core/testing';

import { SomethingService } from './something.service';

describe('SomethingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomethingService]
    });
  });

  it('should be created', inject([SomethingService], (service: SomethingService) => {
    expect(service).toBeTruthy();
  }));
});
