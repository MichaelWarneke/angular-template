import { TestBed, inject } from '@angular/core/testing';

import { HomeDbService } from './home-db.service';

describe('HomeDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeDbService]
    });
  });

  it('should be created', inject([HomeDbService], (service: HomeDbService) => {
    expect(service).toBeTruthy();
  }));
});
