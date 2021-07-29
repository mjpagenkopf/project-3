<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userOptions = {
  discriminatorKey: 'userType',
  collection: 'users',
};

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  }
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
=======
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
>>>>>>> 82d85d688d3d360901ba84d9cd998ed90a2403eb
