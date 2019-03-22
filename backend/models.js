const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pet_shelter_db', {useNewUrlParser:true});

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pet name is Required'],
    minlength: [3, "Must be longer than 3 characters long"],
  },
  type: {
    type: String,
    required: [true, 'Pet type is Required'],
    minlength: [3, "Must be longer than 3 characters long"],
  },
  description: {
    type: String,
    required: [true, 'Pet description is Required'],
    minlength: [3, "Must be longer than 3 characters long"],
  },
  skills: [{
    skill1: {
      type: String,
      default: ""
    },
    skill2: {
      type: String,
      default: ""
    },
    skill3: {
      type: String,
      default: ""
    }
  }],
  likes: {
    type: Number,
    default: 0
  }
}, {timestamps:true});

module.exports = mongoose.model('Pet', PetSchema);
