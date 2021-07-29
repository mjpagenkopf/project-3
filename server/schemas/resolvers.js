const { Team, Player } = require('../models');
const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
Query: {
    getUser: queries.getUser,
    
    teams: async () => {
        return await Team.find({}).populate('playersId')
    },

    team: async (parent, { teamId }) => {
        return await Team.findOne({ _id: teamId }).populate('playersId')
    },

    players: async () => {
        return await Player.find({})
    },

    player: async (parent, { playerId }) => {
        return await Player.findOne({ _id: playerId })
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
    },

    addUser: async (parent, {firstName, lastName, username, password}) => {
        return await User.create({firstName, lastName, username, password})
    },

    removeTeam: async (parent, { teamId }, context) => {
        return await Team.findOneAndDelete({
            _id: teamId
        })
    },

    updatePlayer: async (parent, { playerId, games, points, assists, rebounds, steals, blocks }) => {
        return await Player.findOneAndUpdate(
          { _id: playerId }, 
          { games },
          { points },  
          { assists },
          { rebounds },
          { steals },
          { blocks },
          { new: true }
        );
      }
}
}

module.exports = resolvers