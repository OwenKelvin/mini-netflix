import { Component, OnInit } from '@angular/core';
import { ToastService } from './shared/toast/toast.service';
export interface IToast {
  autohide: boolean;
  show: boolean;
  message: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mini-netflix';
  toastParams: IToast;
  constructor(private toast: ToastService) {

  }
  ngOnInit() {
    this.toastParams = { autohide: false, show: false };
  }
  showToast() {
    this.toast.show('Successfully logged out', {
      classname: 'bg-success text-light',
      delay: 1000
    });
  }
}

