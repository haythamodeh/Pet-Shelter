const controller = require("./controller");

module.exports = app => {
  app
    .get('/api/authors', controller.allAuthors)
    .get('/api/authors/:id', controller.getAuthor)
    .post('/api/authors', controller.createAuthor)
    .put('/api/authors/:id', controller.updateAuthor)
    .delete('/api/authors/:id', controller.deleteAuthor);
}