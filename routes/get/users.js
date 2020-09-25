const users = require('../../data').users;


module.exports = app => {
  app.get("/users", (request, response) => {
    response.json(users);
  });

  for(let i = 0; i < users.length; i++) {
    app.get(`/users/${i}`, (request, response) => {
      response.json(users[i]);
    });
  }
}