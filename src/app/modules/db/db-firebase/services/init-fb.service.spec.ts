import { TestBed, inject } from '@angular/core/testing';

import { InitFbService } from './init-fb.service';

describe('InitDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitFbService]
    });
  });

  it('should be created', inject([InitFbService], (service: InitFbService) => {
    expect(service).toBeTruthy();
  }));
});
