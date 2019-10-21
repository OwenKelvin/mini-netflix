import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { AUTH_USER_LOGGED_IN } from '../../store/actions';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  error: string;
  signUpForm: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      this.pwdMatchValidator
    );
  }
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }
  signUp() {
    if (this.signUpForm.valid) {
      this.authService
        .register(
          this.signUpForm.get('email').value,
          this.signUpForm.get('password').value
        )
        .subscribe(
          item => {
            this.router.navigate(['/']);
            this.store.dispatch({
              type: AUTH_USER_LOGGED_IN,
              payload: true
            });
          },
          error => {
            this.error = 'Unable to authenticate';
          }
        );
    } else {
      if (!this.signUpForm.get('email').valid) {
        this.error = 'The email address you provided is incorrect';
      } else {
        this.error = 'Invalid form fields';
      }
    }
  }
  close() {
    this.error = null;
  }
}
