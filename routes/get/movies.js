const movies = require('../../data').movies;

module.exports = app => {
  app.get("/movies", (request, response) => {
    response.json(movies);
  });

  for(let i = 0; i < movies.length; i++) {
    app.get(`/movies/${i}`, (request, response) => {
      response.json(movies[i]);
    });
  }
}