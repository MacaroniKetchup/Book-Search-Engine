import { gql } from '@apollo/client';
// mutation to add user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// mutation to login user
export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// mutation to save a book
export const SAVE_BOOK = gql`
  mutation saveBook($$bookData: BookInfo!) {
    saveBook(bookData: $bookData) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
// mutation to remove a book
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {

    _id
    username
    bookCount
    savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;