const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../../models');

async function getUser(parent, args, context) {
  if (!context.user) throw new AuthenticationError('You need to log in');

  const user = await User.findById(context.user._id);
  return user;
}

module.exports = { getUser};