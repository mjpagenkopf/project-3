const mongoose = require('mongoose');

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || 'mongodb://localhost/programming-thoughts',
=======
  process.env.MONGODB_URI || 'mongodb://localhost/team-db',
>>>>>>> main
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;