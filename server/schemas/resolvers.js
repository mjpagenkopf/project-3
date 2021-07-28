const { Team, Player } = require('../models');
const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
Query: {
    getUser: queries.getUser,
    teams: async () => {
        return await Team.find({}).populate('playersId')
    },

    players: async () => {
        return await Player.find({})
    },
    team: async (parent, { teamId }) => {
        return await Team.findOne({ _id: teamId }).populate('playersId')
    }
},

Mutation: {
    newUser: mutations.newUser,
    login: mutations.login,
    addPlayer(parent, args) {
        const {name, image, position, height, weight, age, number, games, points, assists, rebounds, steals, blocks, teamId} = args;
        return Player.create({
            name,
            image,
            position,
            height,
            weight,
            age,
            number,
            games,
            points,
            assists,
            rebounds,
            steals,
            blocks,
            teamId
        })
    },

    addTeam: async (parent, {name, coach, season}) => {
        return await Team.create({name, coach, season})
    }
}
}

module.exports = resolvers