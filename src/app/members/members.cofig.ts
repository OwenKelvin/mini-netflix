import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { MyMoviesComponent } from './my-movies/my-movies.component';

export const membersRouterConfig: Routes = [
    { path: 'my-movies', component: MyMoviesComponent, canActivate: [AuthGuard] },
];
