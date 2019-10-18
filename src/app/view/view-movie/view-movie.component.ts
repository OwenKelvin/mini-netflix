import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { imageUrl } from 'src/app/config/app.config';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {
  movie: any;
  constructor(private router: Router, private movieService: MovieService) {}
  ngOnInit() {
    this.movie = {};

    // imageUrl
    const activatedRoute: ActivatedRoute = this.router.routerState.root;
    activatedRoute.children[0].params.subscribe(params => {
      if (params.id) {
        this.movieService.getMovie(params.id).subscribe(results => {
          this.movie = {
            ...results,
            backdrop_path: `${imageUrl}${results.backdrop_path}`,
            poster_path: `${imageUrl}${results.backdrop_path}`
          };
        });
      }
    });
  }
}
