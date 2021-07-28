const { Team, Player } = require('../models');

const resolvers = {
Query: {
    teams: async () => {
        return await Team.find({}).populate('playersId')
    },

    team: async (parent, { teamId }) => {
        return await Team.findOne({ _id: teamId }).populate('playersId')
    },

    players: async () => {
        return await Player.find({})
    },

    player: async () => {
        return await Player.findOne({ _id: playerId })
    }

},

Mutation: {
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