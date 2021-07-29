const { Team, Player, User } = require('../models');

const resolvers = {
Query: {
    user: async (parent, {username, password}) => {
        return await User.findOne({username: username, password: password})
    },

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
    addPlayer(parent, {teamId, name, image, position, height, weight, age, number, games, points, assists, rebounds, steals, blocks}) {
        return Team.findOneandUpdate(
            {_id: teamId},
            {
            $addToSet: {
                playersId: {
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
                    blocks
                }
            }
            }
        )
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