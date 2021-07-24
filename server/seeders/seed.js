const db = require('../config/connection');
const { Player, Team } = require('../models');
const playerSeeds = require('./playerSeeds.json');
const teamSeeds = require('./teamSeeds.json')

db.once('open', async () => {
    try{
        await Player.deleteMany({});
        await Team.deleteMany({});

        await Player.create(playerSeeds);
        await Team.create(teamSeeds);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seeding finished!');
    process.exit(0);
})