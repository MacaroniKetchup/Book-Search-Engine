const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookcount: Int
    savedBooks: [bookShema]
}

type Book {
    bookId: String
    authors: [{ String }]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}
# the "!" syntax at the end of each property like "String!" is like writting,
# "required: true" in a model
type Query {
    user: [User]
    user(username: String!): User
    savedBooks(username: String): [savedBooks]
    bookCount: [savedBooks]
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # Need to look into creating a "input" type to handle multiple parameters
    # for author's array, description, title, bookId, image,
    # and link parameters
    saveBook(): User
    removeBook(bookId: String!): User
}
`

module.exports = typeDefs;