const db = require('../config/connection');
const { Team, Player, User } = require('../models');
const teamSeeds = require('./teamSeeds.json');
const playersSeeds = require('./playersSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    await Team.deleteMany({});
    await Player.deleteMany({});
    await User.deleteMany({})

    await User.create(userSeeds)

    const teams = await Team.create(teamSeeds);
    const players = await Player.insertMany(playersSeeds)
    const tempTeam = await teams[Math.floor(Math.random() * teams.length)]
    

    if (tempTeam) {
        const id = tempTeam._id
        const user = await User.findOneAndUpdate(
            {
                $addToSet: {
                    teams: id
                }
            }
        )
        console.log(user)
    }

    for (player of players) {
        tempTeam.playersId.push(player); 
        await tempTeam.save();
    }

  console.log('all done!');
  process.exit(0);
})