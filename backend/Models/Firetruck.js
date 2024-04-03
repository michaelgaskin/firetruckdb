const mongoose = require('mongoose');
const mongoDBConnectionString = mongodb+srv://mikegaskin01:a9dgnRw4lpXjpWTi@firetruckdb-mongo.92nx62r.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('MongoDB connected');
});
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
  }
}, {
    collection: 'firetrucks'
  })
module.exports = mongoose.model('Firetrucks', firetruckSchema)