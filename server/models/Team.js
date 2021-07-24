const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Player"
    }
  ],

});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;