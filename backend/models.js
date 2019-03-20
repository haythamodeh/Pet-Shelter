const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors_db', {useNewUrlParser:true});

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required'],
    minlength: [3, "Must be longer than 3 characters long"]
  }
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorSchema);
