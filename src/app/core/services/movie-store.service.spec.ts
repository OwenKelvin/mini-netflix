import { TestBed } from '@angular/core/testing';

import { MovieStoreService } from './movie-store.service';
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
    const service: MovieStoreService = TestBed.get(MovieStoreService);
    expect(service).toBeTruthy();
  });
});
