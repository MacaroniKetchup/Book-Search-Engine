const { gql } = require('apollo-server-express');

const typeDefs = gql`
# the "!" syntax at the end of each property like "String!" is like writting,
# "required: true" in a model
type User {
    _id: ID
    username: String
    email: String
    bookcount: Int
    savedBooks: [Book]!
}

type Book {
    bookId: String!
    authors: [ String ]
    description: String
    title: String!
    image: String
    link: String
}

input BookInfo {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String

}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # Need to look into creating a "input" type to handle multiple parameters
    # for author's array, description, title, bookId, image,
    # and link parameters
    saveBook(bookData: BookInfo!): User
    removeBook(bookId: String!): User
}
`

module.exports = typeDefs;