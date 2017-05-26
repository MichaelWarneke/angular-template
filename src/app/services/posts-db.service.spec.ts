import { TestBed, inject } from '@angular/core/testing';

import { SomethingDbService } from './something-db.service';

describe('SomethingDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomethingDbService]
    });
  });

  it('should be created', inject([SomethingDbService], (service: SomethingDbService) => {
    expect(service).toBeTruthy();
  }));
});
