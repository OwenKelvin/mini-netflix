import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
  );

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
