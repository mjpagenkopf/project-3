const { Team, Player } = require('../models');

const resolvers = {
Query: {
    teams: async () => {
        return await Team.find({}).populate('playersId')
    },

    players: async () => {
        return await Player.find({})
    },
    team: async (parent, args) => {
        return await Team.findById(args.id).populate('playersId')
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
