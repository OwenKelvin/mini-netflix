import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ActiveUserGuard } from '../core/guards/active-user.guard';
import { HomeComponent } from '../home/home.component';

export const authRouterConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [ActiveUserGuard]
      },
      {
        path: 'register',
        component: SignupComponent,
        canActivate: [ActiveUserGuard]
      }
    ]
  }
];
