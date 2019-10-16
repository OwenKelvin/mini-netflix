import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-netflix';
  items: any;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
}
