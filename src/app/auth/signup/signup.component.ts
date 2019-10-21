import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: any;
  signUpFormModal: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<any>,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.open(SignUpFormComponent);
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
    this.store.pipe(select(state => state.auth)).subscribe(item => {
      if (item && item.userLoggedIn) {
        this.signUpFormModal.close();
      }
    });
  }
  open(content) {
    this.signUpFormModal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    });
    this.signUpFormModal.result.then().catch(caught => {
      this.router.navigate(['/']);
    });
  }
}
