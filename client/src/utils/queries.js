import { gql } from '@apollo/client';

// query to get the logged in users profile
export const GET_ME = gql`
  query me($username: String!) {
    me(username: $username) {
      _id
      username
      email
      savedBooks {
            _id
            bookId
            authors
            title
            description
            image
            link
      }
    }
  }
`;
