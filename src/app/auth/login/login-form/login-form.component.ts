import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AUTH_USER_LOGGED_IN } from '../../store/actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  credentials: FormGroup;
  error: string | null;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<any>,
    public afAuth: AngularFireAuth,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  login() {
    if (this.credentials.valid) {
      this.authService
        .login(
          this.credentials.get('email').value,
          this.credentials.get('password').value
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
      if (!this.credentials.get('email').valid) {
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
