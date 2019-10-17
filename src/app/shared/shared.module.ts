import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllMoviesCarouselComponent } from '../home/all-movies-carousel/all-movies-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewMovieComponent } from '../view/view-movie/view-movie.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AllMoviesCarouselComponent,
    ViewMovieComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbPaginationModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    AllMoviesCarouselComponent,
    ViewMovieComponent
  ]
})
export class SharedModule {}
