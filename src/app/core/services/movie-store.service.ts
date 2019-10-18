import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {
  constructor() {}
  get currentFavourites(): number[] | string[] | null {
    if (localStorage.getItem('favourites')) {
      return JSON.parse(localStorage.getItem('favourites'));
    } else {
      return [];
    }
  }
  addToFavourites(id: number | string) {
    let newFavourites = [];
    if (this.currentFavourites) {
      newFavourites = [...this.currentFavourites, id];
    }

    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  }
  isFavourite(id: any): boolean {
    if (this.currentFavourites) {
      return !this.currentFavourites.every(item => item !== id);
    }
    return false;
  }
  removeFromFavourites(id): void {
    const newFavourites = (this.currentFavourites as Array<any>).filter(
      item => {
        return item !== id;
      }
    );
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  }
}
