const Author = require("./models");

module.exports = {

  allAuthors: (req, res) => {
    Author.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const DATA = req.body;
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createQuote: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id: ID}, {$push: {quotes: DATA}}, {runValidators:true, new:true})
      .then(data => console.log(data) || req.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  deleteQuote: (req, res) => {
    const ID = req.params.id;
    const quoteid = req.params.quoteid;
    console.log(ID);
    console.log(quoteid);
    Author.findOneAndUpdate({_id: ID}, {$pull: {quotes: {_id: quoteid}}})
      .then(data => req.json(data))
      .catch(err => res.json(err));
  },
  
  updateAuthor: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => req.json(data))
      .catch(err => res.json(err));
  },

  addRemoveVote: (req, res) => {
    const ID = req.params.id;
    const quoteid = req.params.quoteid;
    const v = req.params.vote;
    Author.findOneAndUpdate({"_id": ID, "quotes._id": quoteid}, {$inc: {"quotes.$.vote": v}})
      .then(data => req.json(data))
      .catch(err => res.json(err));
  },

  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}