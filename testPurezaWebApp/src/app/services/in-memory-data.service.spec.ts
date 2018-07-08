import { TestBed, inject } from '@angular/core/testing';

<<<<<<< HEAD
import { InMemoryDataService } from '../in-memory-data.service';
=======
import { InMemoryDataService } from './in-memory-data.service';
>>>>>>> 220ff1fb1f4a0439a2a747fbe7477172576533e0

describe('InMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  it('should be created', inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
