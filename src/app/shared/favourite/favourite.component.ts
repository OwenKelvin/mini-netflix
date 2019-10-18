import { Component, OnInit, Input } from '@angular/core';
import { MovieStoreService } from 'src/app/core/services/movie-store.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() movieId;
  isFavourite: boolean;
  constructor(
    private movie: MovieStoreService
  ) {}

  ngOnInit() {
    this.isFavourite = this.movie.isFavourite(this.movieId);
  }
  toggleFavourite(value: boolean): void {
    this.isFavourite = value;
    if (this.isFavourite) {
      this.movie.addToFavourites(this.movieId);
    } else {
      this.movie.removeFromFavourites(this.movieId);
    }
  }
}
