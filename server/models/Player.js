const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  
  image: {
    type: String,
    trim: true
  },

  position: {
    type: String,
    trim: true
  },

  height: {
    type: String,
    required: true
  },

  weight: {
    type: Number,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  number: {
    type: Number,
    required: true
  },
  
  season: [
    {
      
      year: {
        type: Number,
        required: true
      },

      stats: [
          {              
              team: {
                  type: String,
                  trim: true,
                  required: "String is Required"
              },
              
              games: {
                  type: Number,
                  required: true
              },
              
              points: {
                  type: Number,
                  required: true
              },
              
              assists: {
                  type: Number,
                  required: true
              },
              
              rebounds: {
                  type: Number,
                  required: true
              },
              
              steals: {
                  type: Number,
                  required: true
              },
              
              blocks: {
                  type: Number,
                  required: true
              },
          }
      ],
    }
  ]
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;