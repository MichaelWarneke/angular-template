import { TestBed, inject } from '@angular/core/testing';

import { TodosDbService } from './todos-db.service';

describe('TodosDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosDbService]
    });
  });

  it('should be created', inject([TodosDbService], (service: TodosDbService) => {
    expect(service).toBeTruthy();
  }));
});
