import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
      ]
    })
  );

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
