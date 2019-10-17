import { Routes } from '@angular/router';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const viewRouterConfig: Routes = [
  {
    path: 'view/:id',
    component: ViewMovieComponent,
    canActivate: [AuthGuard]
  }
];
