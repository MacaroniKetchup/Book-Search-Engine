# Book-Search-Engine

## Created By
   - ![Github license](https://img.shields.io/badge/license-MIT-yellowgreen.svg)
   - Cory 
   - @MacaroniKetchup
## Table of Contents
  - [Description](#description)
  - [Installations](#installations)
  - [Usage](#usage)
  - [Contact-Info](#contact)
  - [Contributions](#contributions)
  - [Testing](#testing)
  
* [License](#license)

## Description

This application is a Book Search Engine that is using googlebooks API. The application originally was set up to be an Express.js Application that has now been converted to function using the React.js framework. You'll be able to create a user, and login as your created user. Search from a number of books, and add them to your personal saved books page with the click of a button from the searched book results!

## Installations

Dependancies in the Server folder package.json
```
  "dependencies": {
    "apollo-server-express": "^3.6.2",
    "bcrypt": "^5.0.0",
    "express": "^4.17.1",
    "graphql": "^16.3.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^7.0.2"
  },
```

Dependancies in the Client folder package.json
```
  "dependencies": {
    "@apollo/client": "^3.5.8",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "bootstrap": "^5.2.3",
    "jwt-decode": "^2.2.0",
    "graphql": "^15.4.0",
    "react": "^16.13.1",
    "react-bootstrap": "^2.7.0",
    "react-dom": "^16.13.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "^5.0.1"
  },
```

## Usage
If you wish to try out this application you can click the link below in the [Demo](#demo) section below, and follow these steps.
* Sign up as a new user by clicking the signup button on the top right of the screen. When you fill out the form you can use a fake username and email if you dont wish to use your own email or username.

* Once logged in, Search for a book or series using the search bar on the home page.

* Once you've searched your book you can click the Save Book button below the description of each book, the button will change accordingly to notify you that the book has been saved to your saved books page.

* Click on the "See You Books" button in the navbar at the top of the page and you'll be able to view all of your saved books!

## Demo
[Book Search Engine Application](https://serene-everglades-09926.herokuapp.com/)
![Book Search Engine Demo](./assets/demo.gif)
## Contributors
If you would like to make contributions or edit this code on your own you can fork this project from the repo located on my GitHub profile. Or you can contact me via email, both of these will be located in the bottom of the README file or you can quick access my contact infrom via the table of contents.
## Contact-Info
- Name: Cory
- Email: stylesthestyer@gmail.com
- Github: [MacaroniKetchup](https://github.com/MacaroniKetchup/)
## Testing
```
No tests were written for this project
```
## License

      licensed under the MIT license.