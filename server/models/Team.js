const {Schema, model} = require("mongoose");

const TeamSchema = new Schema({  
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  coach: {
    type: String,
    trim: true,
    required: "String is Required"
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