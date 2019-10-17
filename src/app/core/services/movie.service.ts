import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from 'src/app/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {

  }
  getAllMovies(filter: { page: number } = null): Observable<any> {
    console.log(filter)
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
    // const allMovies = [
    //   {
    //     movie_id: 1,
    //     title: 'Crouching Tiger Hidden Dragon',
    //     category_name: 'Action',
    //     edition: 'Superbit Edition',
    //     release_year: 2000,
    //     running_time: 120,
    //     rating_name: 'PG-13',
    //     disc_format_name: 'DVD',
    //     number_discs: 1,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 2.35:1',
    //     status: 1,
    //     time_stamp: '2006-01-02'
    //   },
    //   {
    //     movie_id: 2,
    //     title: 'Ip Man',
    //     category_name: 'Action',
    //     edition: '',
    //     release_year: 2008,
    //     running_time: 107,
    //     rating_name: 'R',
    //     disc_format_name: 'Blu-ray',
    //     number_discs: 1,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 1.85:1',
    //     status: 1,
    //     time_stamp: '2011-05-02'
    //   },
    //   {
    //     movie_id: 3,
    //     title: 'Ip Man 2',
    //     category_name: 'Action',
    //     edition: '2-Disc Collectors Edition',
    //     release_year: 2010,
    //     running_time: 108,
    //     rating_name: 'R',
    //     disc_format_name: 'Blu-ray',
    //     number_discs: 2,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 1.85:1',
    //     status: 1,
    //     time_stamp: '2011-05-02'
    //   },
    //   {
    //     movie_id: 4,
    //     title: 'No Tears for the Dead',
    //     category_name: 'Action',
    //     edition: 'Blu-ray Edition',
    //     release_year: 2015,
    //     running_time: 116,
    //     rating_name: 'UNR',
    //     disc_format_name: 'Blu-ray',
    //     number_discs: 1,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 1.85:1',
    //     status: 1,
    //     time_stamp: '2015-03-25'
    //   },
    //   {
    //     movie_id: 5,
    //     title: 'Red Cliff',
    //     category_name: 'Action',
    //     edition: 'Original Internation Version',
    //     release_year: 2008,
    //     running_time: 288,
    //     rating_name: 'R',
    //     disc_format_name: 'DVD',
    //     number_discs: 2,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 1.78:1',
    //     status: 1,
    //     time_stamp: '2011-05-02'
    //   },
    //   {
    //     movie_id: 6,
    //     title: 'The Man From Nowhere',
    //     category_name: 'Action',
    //     edition: '119',
    //     release_year: 2010,
    //     running_time: 501,
    //     rating_name: 'R',
    //     disc_format_name: 'Blu-ray',
    //     number_discs: 1,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 1.85:1',
    //     status: 1,
    //     time_stamp: '2011-12-22'
    //   },
    //   {
    //     movie_id: 7,
    //     title: 'The Raid: Redemption',
    //     category_name: 'Action',
    //     edition: 'Unrated Edition',
    //     release_year: 2012,
    //     running_time: 101,
    //     rating_name: 'R',
    //     disc_format_name: 'Blu-ray',
    //     number_discs: 1,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 1.78:1',
    //     status: 1,
    //     time_stamp: '2014-09-30'
    //   },
    //   {
    //     movie_id: 8,
    //     title: 'War of the Arrows',
    //     category_name: 'Action',
    //     edition: '',
    //     release_year: 2011,
    //     running_time: 122,
    //     rating_name: 'R',
    //     disc_format_name: 'Blu-ray + DVD',
    //     number_discs: 2,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 2.78:1',
    //     status: 1,
    //     time_stamp: '2012-08-31'
    //   },
    //   {
    //     movie_id: 9,
    //     title: 'Ip Man 3',
    //     category_name: 'Action',
    //     edition: '',
    //     release_year: 2016,
    //     running_time: 105,
    //     rating_name: 'PG-13',
    //     disc_format_name: 'Blu-ray',
    //     number_discs: 1,
    //     viewing_format_name: 'Widescreen',
    //     aspect_ratio_name: ' 2.78:1',
    //     status: 1,
    //     time_stamp: '2016-05-18'
    //   }
    // ];
  
    return of(allMovies)
  }
}
