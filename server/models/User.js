const {Schema, model} = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new Schema({  
  firstName: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  username: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
  ]
});

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model("User", UserSchema);

module.exports = User