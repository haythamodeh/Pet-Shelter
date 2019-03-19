const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cake_db', {useNewUrlParser:true});

const CakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required']
  },
  url: {
    type: String,
    required: [true, 'URL is Required'],
  },
  ratings: { 
    type: Array,
  }
}, {timestamps:true});

module.exports = mongoose.model('Cake', CakeSchema);
