import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const searchRouterConfig: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
