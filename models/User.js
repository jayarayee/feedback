const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSehema = new Schema({
  googleId: String
});

mongoose.model('users', userSehema);
