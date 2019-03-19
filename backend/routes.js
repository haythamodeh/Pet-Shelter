const controller = require("./controller");

module.exports = app => {
  app
    .get('/api/cakes', controller.allCakes)
    .get('/api/cakes/:id', controller.getCake)
    .post('/api/cakes', controller.createCake)
    .put('/api/cakes/:id', controller.updateCake)
    .delete('/api/cakes/:id', controller.deleteCake);
}