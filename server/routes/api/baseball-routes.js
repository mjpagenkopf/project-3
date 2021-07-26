// const express = require('express');
// const path = require('path');
// const app = express();
// const axios = require('axios');
  





//   router.get('/api/baseball/:name', (req, res) => {
//     const { name } = req.params

//     var options = {
//         method: 'GET',
//         url: 'https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam',
//         params: {name_part: `\'${name.split("-").join(" ")}\'`, sport_code: '\'mlb\'', active_sw: '\'Y\''},
//         headers: {
//         'x-rapidapi-key': process.env.REACT_APP_API_KEY,
//         'x-rapidapi-host': 'mlb-data.p.rapidapi.com'
//         }
//     };
//     axios.request(options).then(function (res) {
//         console.log(res.data);
//     }).catch(function (error) {
//         console.error(error);
//     });

// });

// if (process.env.NODE_ENV === "production") {
// // Serve any static files
// app.use(express.static(path.join(__dirname, "client/build")));
// // Handle React routing, return all requests to React app
// app.get("*", (request, response) => {
//     response.sendFile(path.join(__dirname, "client/build", "index.html"));
// });
// }

// const port = process.env.PORT || 8080;
// app.listen(port, () => {
// console.log(`API listening on port ${port}...`);
// });