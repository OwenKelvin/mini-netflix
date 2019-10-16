
# MiniNetflix

This is a mini-netflix web application with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Installation

- run **`git clone https://github.com/OwenKelvin/mini-netflix.git`** to clone the repository
- **`cd`** into the project files and run **`npm install`**
- Open the source files and rename *`src/environments/environment.env.ts`* to *`src/environments/environment.ts`*
- rename *`src/environments/environment.prod.env.ts`* to *`src/environments/environment.prod.ts`*
- Go to [FireBase Console](https://console.firebase.google.com/u/0/) and create a new Firebase app on your Firebase console with your Google Account by clicking on “Add project” and typing your app name e.g app-mini-netflix

&nbsp;&nbsp;&nbsp;&nbsp;*export const environment = {*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*production: true,*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*firebase: {*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',*</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*authDomain: 'app-mini-netflix.firebaseapp.com',*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*databaseURL: `https://app-mini-netflix.firebaseio.com`,*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*projectId: 'app-mini-netflix',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*storageBucket: 'app-mini-netflix.appspot.com',*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*appId: '1:513014570227:web:dc8ded86bef56ecc3beb86',*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*measurementId: 'G-0WZF81CVQH'*<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*messagingSenderId: '763399536402'*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *}*<br/>
&nbsp;&nbsp;&nbsp;&nbsp; *};*<br/>

- click on “Add Firebase to your web app”, and copy the config keys into src/environments/environment.ts(do the same for environment-prod.ts)
- Once the App is created Go  to authentication => Add User and add a user
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
**You are set to go...**

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
