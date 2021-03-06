import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AUTH_USER_LOGGED_IN } from '../auth/store/actions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SEARCH_REQUEST } from '../search/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  isLoggedIn: boolean;
  searchForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<any>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]]
    });
    this.user = this.auth.user;
    this.updateUserDetails();
    this.store
      .pipe(select(state => state.auth))
      .pipe(
        map(item => {
          if (item) {
            return item.userLoggedIn;
          }
        })
      )
      .subscribe(item => {
        if (item) {
          this.isLoggedIn = true;
          if (this.auth.user) {
            this.user = this.auth.user;
          }
        }
      });
  }
  logout() {
    this.auth.logout().subscribe(item => {
      this.isLoggedIn = false;
      this.router.navigate(['/']);
      this.store.dispatch({
        type: AUTH_USER_LOGGED_IN,
        payload: false
      });
    });
  }
  updateUserDetails() {
    this.isLoggedIn = this.auth.isLoggedIn;
    if (this.isLoggedIn) {
      this.user = this.auth.getUser();
    }
  }
  goToSearch() {
    this.store.dispatch({
      type: SEARCH_REQUEST,
      payload: this.searchForm.get('search').value
    });
    this.router.navigate(['/search']);
  }
}
