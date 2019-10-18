import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() movieId;
  isFavourite: boolean;
  constructor() { }

  ngOnInit() {
  }
  toggleFavourite(value: boolean): void{
    this.isFavourite = value;
  }
}
