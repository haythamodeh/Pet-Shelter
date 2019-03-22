const controller = require("./controller");

module.exports = app => {
  app
    .get('/api/authors', controller.allAuthors)
    .get('/api/authors/:id', controller.getAuthor)
    .post('/api/authors', controller.createAuthor)
    .post("/api/authors/add/:id", controller.createQuote)
    .put('/api/authors/:id', controller.updateAuthor)
    .put("/api/authors/:id/:quoteid/:vote", controller.addRemoveVote)
    .delete('/api/authors/:id', controller.deleteAuthor)
    .delete("/api/authors/deleteQuote/:id/:quoteid", controller.deleteQuote);
}