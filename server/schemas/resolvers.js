<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {};

  Mutation: {};

module.exports = resolvers;
=======
const { Player, Team } = require('../models');

const resolvers = {
    Query: {
        teams: async () => {
            return Team.find()
        },
        team: async ({ name }) => {
            return Team.findOne()
        },
        players: async () => {
            return Player.find()
        },
        player: async (parent, { _id }) => {
            return Player.findOne()
        }
    }
}

module.export = resolvers
>>>>>>> main
