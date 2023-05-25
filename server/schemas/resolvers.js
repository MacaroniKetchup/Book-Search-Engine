const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v-password');
                return userData
            }
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
        // saveBook with arg of bookId
        saveBook: async (parent, { bookId }, context) => {
            // if user is logged in
            if (context.user) {
                // find user and update savedBooks array with title and bookId
                return User.findOneUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: {
                            savedBooks: { title, bookId },
                        }
                    },
                    // Validation if book is new to the savedBooks array
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // removeBook with a bookId
        removeBook: async (parent, { bookId }, context) => {
            // if user is logged in
            if (context.user) {
                // savedBook variable to findOneAndDelete a savedBook with bookId 
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                );
            }
        },
    },
};

module.exports = resolvers;