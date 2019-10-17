import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AUTH_USER_LOGGED_IN } from '../store/actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  credentials: FormGroup;
  error: string | null;
  loginFormModal: NgbModalRef;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<any>,
    public afAuth: AngularFireAuth,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.open(LoginFormComponent);
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.store.pipe(select(state => state.auth)).subscribe(item => {
      if (item && item.userLoggedIn) {
        this.loginFormModal.close();
      }
    });
  }
  open(content) {
    this.loginFormModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    });
    this.loginFormModal.result.then().catch(caught => {
      this.router.navigate(['/']);
    });
  }
}
