const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let firetruckSchema = new Schema({
  year : {
    type: Number
  },
  make : {
    type: String
  },
  model : {
    type: String
  },
  pump : {
    type: Number
  },
  watertank : {
    type: Number
  },
  foamtank : {
    type: String
  },
  aerial : {
    type: String
  },
  }
}, {
    collection: 'firetrucks'
  })
module.exports = mongoose.model('Firetrucks', firetruckSchema)