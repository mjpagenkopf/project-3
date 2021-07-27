const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
import axios from "axios";
// const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
  // context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get(`/baseball/:name`, async (req, res) => {
      const { name } = req.params
    
    try {
      const { data } = await axios({
          method: 'GET',
          url: 'http://lookup-service-prod.mlb.com/json/named.search_player_all.bam',
          params: { 
            sport_code: "'mlb'", 
            active_sw: "'Y'", 
            name_part: `'${ name }'`,
          },
          headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          // 'x-rapidapi-host': 'mlb-data.p.rapidapi.com'
          },
      })

    // Pull the information that we need from the response
    const playerData = {
      playerFullName: data.response.search_player_all.queryResults.row.name_display_first_last,
      // playerCountry: data.search_player_all.queryResults.row.birth_country,
      // playerTeam: data.search_player_all.queryResults.row.team_full,
      // playerPosition: data.search_player_all.queryResults.row.position,
      // playerID: data.search_player_all.queryResults.row.player_id,
    }

    return res.send(playerData)
    } catch (e) {
    console.log(e)

    return res.status(500).send('Error')
    }
  });
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(routes);

// db.once('open', () => {
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
// });
