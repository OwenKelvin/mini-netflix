import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllMoviesCarouselComponent } from '../home/all-movies-carousel/all-movies-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbPaginationModule, NgbRatingModule, NgbPopoverModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewMovieComponent } from '../view/view-movie/view-movie.component';
import { HrsMinutes } from '../core/pipe/hrs-minutes.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { FooterComponent } from './footer/footer.component';
import { MyMoviesComponent } from '../members/my-movies/my-movies.component';
import { SearchComponent } from '../search/search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    MyMoviesComponent,
    AllMoviesCarouselComponent,
    ViewMovieComponent,
    HrsMinutes,
    FavouriteComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    NgbAlertModule,
    NgbPopoverModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbPaginationModule,
    NgbRatingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    AllMoviesCarouselComponent,
    ViewMovieComponent
  ]
})
export class SharedModule {}
