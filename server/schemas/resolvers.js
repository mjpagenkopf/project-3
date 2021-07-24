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