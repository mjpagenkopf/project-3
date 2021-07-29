const {Schema, model} = require("mongoose");

const TeamSchema = new Schema({  
  name: {
    type: String,
    trim: true
  },

  coach: {
    type: String,
    trim: true
  },

  season: {
    type: Number,
    required: true
  },

  playersId: [
    {
    type: Schema.Types.ObjectId,
    ref: "Player"
    }
  ]

});

const Team = model("Team", TeamSchema);

module.exports = Team