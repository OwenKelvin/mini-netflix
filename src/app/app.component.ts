import { Component, OnInit } from '@angular/core';
import { ToastService } from './shared/toast/toast.service';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
export interface IToast {
  autohide: boolean;
  show: boolean;
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mini-netflix';
  toastParams: IToast;
  constructor(private toast: ToastService, private store: Store<any>) {
    this.store.pipe(select(state => state.auth))
      .pipe(map(item => {
        if (item) {
          return item.userLoggedIn;
        } else {
          return item;
        }
      }))
      .subscribe(item => {
        if (item) {
          this.toastParams = {
            autohide: false,
            show: true,
            message: 'Successfully Logged In'
          };
        } else {
          this.toastParams = {
            autohide: true,
            show: true,
            message: 'Successfully Logged Out'
          };
        }
       // this.showToast();
      });

  }
  ngOnInit() {
    this.toastParams = { autohide: false, show: false, message: 'Successfully Logged In' };
  }
  showToast() {
    this.toast.show(this.toastParams.message, {
      classname: 'bg-success text-light',
      delay: 1000
    });
  }
}

