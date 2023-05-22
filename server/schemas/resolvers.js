const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Find username and populate with savedBooks list
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('savedBooks');
        },
        // find and sort book by title
        book: async (parent, { title }) => {
            return Book.find().sort({ title });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You Need to be logged in!')
        },
    },

    Mutation: {
        // addUser with an assigned Token
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            // if email is incorrect throw Auth Error
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);
            // if passworld is incorrect throw Auth Error
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            // assign logged in user with token
            const token = signToken(user);

            return { token, user };
        },
        // addBook with args of title and bookId
        addBook: async (parent, { title, bookId }, context) => {
            // if user is logged in
            if (context.user) {
                // find user and update savedBooks array with title and bookId
                return User.findOneUpdate(
                    {
                        $addToSet: {
                            savedBooks: { title, bookId },
                        }
                    },
                    // Validation if book is new to the savedBooksarray
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // removeBook with title and bookId
        removeBook: async (parent, { title, bookId }, context) => {
            // if user is logged in
            if (context.user) {
                // savedBook variable to findOneAndDelete Boowith bookId and title
                const savedBook = await Book.findOneAndDelete({
                    _id: bookId,
                    title
                });
                // update the User and pull from savedBooks by id 
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: savedBook._id }}
                );
                return User
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    }
};

module.exports = resolvers;