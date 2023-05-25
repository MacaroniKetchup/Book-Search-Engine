import { gql } from '@apollo/client';

// query to get the logged in users profile
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
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
