const data = require('../../data');

module.exports = app => {
  app.get("/", (request, response) => {
    response.json(data);
  });
}