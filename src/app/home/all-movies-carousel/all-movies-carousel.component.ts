import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieService } from 'src/app/core/services/movie.service';
import { backendUrl } from 'src/app/config/app.config';
import { of } from 'rxjs';

@Component({
  selector: 'app-all-movies-carousel',
  templateUrl: './all-movies-carousel.component.html',
  styleUrls: ['./all-movies-carousel.component.css']
})
export class AllMoviesCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  movieDetails = { total_movies: 0, total_pages: 0 };
  allMovies: any[];
  displayMovies: any[];
  displayRange = {
    start: 1,
    currentPage: 1,
    end: 5,
    size: 5
  };
  apiUrl: string;
  imageUrl = 'https://image.tmdb.org/t/p/original';
  constructor(private movie: MovieService, private dc: ChangeDetectorRef) {}

  ngOnInit() {
    this.allMovies = [];
    this.apiUrl = backendUrl;
    this.movie.getAllMovies().subscribe(
      movies => {
        this.allMovies = movies.results;
        this.getDisplayImages();
        this.movieDetails.total_movies = movies.total_results;
        this.movieDetails.total_pages = movies.total_pages;
      },
      error => {
        console.log(error);
      }
    );
  }
  pageChange() {
    this.displayRange.start =
      (this.displayRange.currentPage - 1) * this.displayRange.size;
    this.displayRange.end =
      this.displayRange.currentPage * this.displayRange.size;
    this.getDisplayImages();
  }
  getDisplayImages() {
    this.displayMovies = this.allMovies.slice(
      this.displayRange.start,
      this.displayRange.end
    );
    console.log(this.displayMovies[0]);
  }
}
