const {Schema, model} = require("mongoose");

const PlayerSchema = new Schema({

    name: {
      type: String,
      trim: true
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
      type: String
    },
  
    weight: {
      type: String
    },
  
    age: {
      type: String
    },
  
    number: {
      type: String
    },

    games: {
      type: String
    },
          
    points: {
      type: String
    },
          
    assists: {
      type: String
    },
          
    rebounds: {
      type: String
    },
          
    steals: {
      type: String
    },
          
    blocks: {
      type: String
    },

    teamsId: [
      {
      type: Schema.Types.ObjectId,
      ref:"Team"
      }
  ]

  })

  const Player = model("Player", PlayerSchema);

  module.exports = Player