const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
      name: { type: String, require: true },
      email: { type: String, require: true },
      age: { type: String, require: true }
},
      {
            timestamps: true
      }
);


module.exports = mongoose.model('User', userModel);


