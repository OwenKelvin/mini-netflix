import { Component, OnInit } from '@angular/core';
import { MovieStoreService } from 'src/app/core/services/movie-store.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { imageUrl } from 'src/app/config/app.config';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  myMovies: any[];
  imageUrl: string;

  constructor(private movie: MovieStoreService, private movieService: MovieService) {
    this.imageUrl = imageUrl;
    this.myMovies = [];
  }

  ngOnInit() {

    this.movie.currentFavourites.forEach(item => {
      this.movieService.getMovie(item).subscribe(res => {
        console.log(res)
        this.myMovies.push(res);
      });
    });
  }
}
