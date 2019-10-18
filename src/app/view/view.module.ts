import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    NgbRatingModule,
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
