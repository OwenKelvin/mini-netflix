import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from 'src/app/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getAllMovies(filter: { page: number } = null): Observable<any> {
    console.log(filter);
    if (filter) {
      const { page } = filter;
      if (page) {
        return this.http.get(backendUrl + 'movies/page/' + page);
      }
    }
    return this.http.get(backendUrl + 'movies');
    // return of(allMovies);
  }
  getFilterTitle(search: string): Observable<any> {
    return this.http.get<any>(backendUrl + 'movies/search/' + search);
  }

  getMovie(id) {
    return this.http.get<any>(backendUrl + 'movie/' + id);
  }
}
