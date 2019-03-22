const Pet = require("./models");

module.exports = {

  allPets: (req, res) => {
    Pet.find().sort("-type").collation({locale: "en", strength: 2})
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getPet: (req, res) => {
    const ID = req.params.id;
    Pet.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getPetName: (req, res) => {
    const n = req.params.name;
    Pet.findOne({name: n})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createPet: (req, res) => {
    let DATA = req.body;
    // DATA.;
    Pet.create({name: DATA.name, type: DATA.type.toLowerCase(), description: DATA.description})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createSkill: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    console.log(DATA);
    Pet.findOneAndUpdate({_id: ID}, {$push: {skills: DATA}}, {runValidators:true, new:true})
      .then(data => console.log(data) || req.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  deleteQuote: (req, res) => {
    const ID = req.params.id;
    const quoteid = req.params.quoteid;
    console.log(ID);
    console.log(quoteid);
    Pet.findOneAndUpdate({_id: ID}, {$pull: {quotes: {_id: quoteid}}})
      .then(data => req.json(data))
      .catch(err => res.json(err));
  },
  
  updatePet: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Pet.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => req.json(data))
      .catch(err => res.json(err));
  },

  addRemoveVote: (req, res) => {
    const ID = req.params.id;
    const l = req.params.like;
    Pet.findOneAndUpdate({"_id": ID}, {$inc: {"likes": l}})
      .then(data => req.json(data))
      .catch(err => res.json(err));
  },

  deletePet: (req, res) => {
    const ID = req.params.id;
    Pet.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}