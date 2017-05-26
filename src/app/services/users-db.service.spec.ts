import { TestBed, inject } from '@angular/core/testing';

import { UsersDbService } from './users-db.service';

describe('UsersDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersDbService]
    });
  });

  it('should be created', inject([UsersDbService], (service: UsersDbService) => {
    expect(service).toBeTruthy();
  }));
});
