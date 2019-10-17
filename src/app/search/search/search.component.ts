import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SEARCH_REQUEST } from '../store/actions';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/core/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  foundMovies: any[];
  imageUrl = 'https://image.tmdb.org/t/p/original';
  searchComplete: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private movies: MovieService,
    private router: Router
  ) {}

  ngOnDestroy() {}
  ngOnInit() {
    this.foundMovies = [];
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]]
    });
    this.store.pipe(select(store => store.search)).subscribe(item => {
      if (item && item.search) {
        this.searchForm.get('search').setValue(item.search);
        this.searchFor(item.search);
      }
    });
  }
  searchFor(search: string) {
    this.movies.getFilterTitle(search).subscribe(items => {
      this.searchComplete = true;
      this.foundMovies = items.results as Array<any>;
    });
  }
  PerformSearch() {
    this.searchFor(this.searchForm.get('search').value);
  }
  viewMovie(movieId) {
    // this.router.navigate(['/movies/view/' + movieId]);
  }
}
