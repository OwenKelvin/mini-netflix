import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, throwError } from 'rxjs';
import { from } from 'rxjs';
export interface IUser {
  displayName: null;
  email: string;
  emailVerified: false;
  isAnonymous: false;
  lastLoginAt: string;
  phoneNumber: null;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }
  getUser(): Observable<any> | string | { uid: string } {
    return JSON.parse(localStorage.getItem('user'));
  }
  register(email: string, password: string) {
    return from(
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.sendEmailVerification();
        })
        .catch(() => {
          throwError('An Error occured while creating the user');
        })
    );
  }
  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['/']); // TODO Enable for email verification
    // this.router.navigate(['admin/verify-email']);
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
  // async logout() {
  //   await this.afAuth.auth.signOut();
  //   localStorage.removeItem('user');
  //   this.router.navigate(['admin/login']);
  // }
  logout(): Observable<any> {
    localStorage.removeItem('user');
    return from(this.afAuth.auth.signOut());
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  async loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.router.navigate(['admin/list']); TODO implement
  }
}
