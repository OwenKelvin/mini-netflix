import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromAuth from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignUpFormComponent } from './signup/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmailComponent,
    SignupComponent,
    UserProfileComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbAlertModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer)
  ],
  entryComponents: [LoginFormComponent, SignUpFormComponent]
})
export class AuthModule {}
