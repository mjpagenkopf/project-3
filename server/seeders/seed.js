const db = require('../config/connection');
const { User, Team, Player } = require('../models');
const userSeeds = require ('./userSeeds.json')
const teamSeeds = require('./teamSeeds.json');
const playersSeeds = require('./playersSeeds.json');
const userSeeds = require('./userSeeds.json');

const randomArrayIndex = (arrLen) => Math.floor(Math.random() * arrLen);

db.once('open', async () => {
    await User.deleteMany({});
    await Team.deleteMany({});
    await Player.deleteMany({});
    await User.deleteMany({})

    const users = await User.create(userSeeds);
    const teams = await Team.insertMany(teamSeeds);
    const players = await Player.insertMany(playersSeeds)
    const tempTeam = await teams[Math.floor(Math.random() * teams.length)]
    
    for (user of users) {
        users.user = users[randomArrayIndex(users.length)]._id;

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