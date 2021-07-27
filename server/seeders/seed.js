const db = require('../config/connection');
const { Team, Player } = require('../models');
const teamSeeds = require('./teamSeeds.json');
const playersSeeds = require('./playersSeeds.json');

db.once('open', async () => {
    await Team.deleteMany({});
    await Player.deleteMany({});

    const teams = await Team.insertMany(teamSeeds);
    const players = await Player.insertMany(playersSeeds)
    const tempTeam = await teams[Math.floor(Math.random() * teams.length)]
    const tempPlay = await players[Math.floor(Math.random() * players.length)]
    const x = teams.map(team => {
        return team._id
    })
    
    for (player of players) {
        tempTeam.playersId.push(player); 
        await tempTeam.save();
    }

    for (team of teams) {
        tempPlay.teamsId.push(team)
        await tempPlay.save()
    }


  console.log('all done!');
  process.exit(0);
})