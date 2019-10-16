
# MiniNetflix

This is a mini-netflix web application with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Installation

### Set up the project on your PC

- run **`git clone https://github.com/OwenKelvin/mini-netflix.git`** to clone the repository
- **`cd`** into the project files and run **`npm install`**
- Open the source files and rename *`src/environments/environment.env.ts`* to *`src/environments/environment.ts`*
- rename *`src/environments/environment.prod.env.ts`* to *`src/environments/environment.prod.ts`*
- rename *`backend/config.env.js`* to *`backend/config.env.js`*

### Fire base Set up

- Go to [FireBase Console](https://console.firebase.google.com/u/0/) and create a new Firebase app on your Firebase console with your Google Account by clicking on “Add project” and typing your app name e.g app-mini-netflix
- click on “Add Firebase to your web app”, and copy the config keys into src/environments/environment.ts(do the same for environment-prod.ts)

```javascript
export const environment = {
  production: true,
    firebase:
      apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      authDomain: 'app-mini-netflix.firebaseapp.com',
      databaseURL: `https://app-mini-netflix.firebaseio.com`,
      projectId: 'app-mini-netflix',
      storageBucket: 'app-mini-netflix.appspot.com',
      appId: '1:513014570227:web:dc8ded86bef56ecc3beb86',
      measurementId: 'G-0WZF81CVQH',
      messagingSenderId: '763399536402'
    }
}
```

- Once the App is created Go  to authentication => Add User and add a user

### Set up a key for Themoviedb.org

- Visit [The Movie DB](https://api.themoviedb.org) and set up an account.
- Create an app and copy the app key to *`backend/config.js` file. The File should look like below

```javascript

  // Replace the xxxxxxxxxxxxxxxxxxxxxxxxx with your key
  export const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

```

- `cd` to backend folder and run `node index`. This will open up a serve on `http://localhost:3000/`. go to the link. you should see a message *Welcome to Make REST API Calls In Express!*
- visit `http://localhost:3000/movies` and check if a list of movies are being returned

### Finally

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**You are set to go...** a user can view all movies on the home page with their image, title and publication

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
