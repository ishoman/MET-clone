# The Metropolitan Museum of Art's Webpage Clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.


#### A clone of the The Metropolitan Museum of Art's webpage (https://www.metmuseum.org/)
#### My clone: https://the-met.firebaseapp.com/

#### By **Isaac Shoman**

## Description

An application created with Angular to clone the Metropolitan Museum of Art's website. Primary focus on separating components and eventually implementing Firebase database. Final product will be used for a portfolio piece.

### Planning Documents
ModelsPlanning.md - Shows initial plans for models to be implemented.

ComponentPlanning.md - Shows component set up with interaction notes and desired elements

 _BOTH FILES AVAILABLE IN ROOT DIRECTORY OF REPOSITORY_

### Specs
| Spec | Implemented | Planned |
| :------------- | :------ | :------- |
| **On load, User sees nav bar with links at top of page** | Yes |  |
| **User is able to click links on the nav bar to view blog posts, events, and MET locations** | Yes |  |
| **On load, User sees Header featuring large image** | Yes | |
| **On load, User sees element that allows them to purchase tickets** | No | Yes |
| **On load, User sees three different museum locations and their descriptions** | No | Yes |
| **On load, User sees four highlighted areas of the site** | No | Yes |
| **On load, User sees four current events going on at the museum** | No | Yes |
| **On load, User sees form for signing up for newsletter** | No | Yes |
| **On load, User sees form for signing up for newsletter** | No | Yes |
| **On load, User sees footer with links and an additional small form to sign up for the newsletter** | No | Yes |


## Setup/Installation Requirements

### Clone this repository.

### Development server

Run `ng serve --open` for a dev server. The app will automatically open in browswer and reload if you change any of the source files.

### Build
* Clone this repository
* Migrate to directory
* Run npm install
* Go to https://firebase.google.com/ and create a new database
* Create file named src/app/api-keys.ts
* Populate with the following with your own firebase credentials:
```
  export let masterFirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
```
  **_Be sure to name variable as shown above._**

* Import sample-info.json into your database

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Known Bugs
* Styling is highly imperfect. Focused on routing and loading information from Firebase.
* Only Blogs and Events Links in the navbar are active.

## Technologies Used
* Angular
* NodeJS
* Firebase (not yet Implemented)
* TypeScript
* ECMA6

## Support and contact details

_Email Isaac with any questions, comments, or concerns. isaac.shoman@gmail.com_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_Isaac Shoman_**
