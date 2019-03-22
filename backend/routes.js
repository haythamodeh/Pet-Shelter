const controller = require("./controller");

module.exports = app => {
  app
    .get('/api/pets', controller.allPets)
    .get('/api/pets/:id', controller.getPet)
    .get('/api/pets/find/:name', controller.getPetName)
    .post('/api/pets', controller.createPet)
    .post("/api/pets/add/:id", controller.createSkill)
    .put('/api/pets/:id', controller.updatePet)
    .put("/api/pets/:id/:like", controller.addRemoveVote)
    .delete('/api/pets/:id', controller.deletePet)
    // .delete("/api/authors/deleteQuote/:id/:quoteid", controller.deleteQuote);
}