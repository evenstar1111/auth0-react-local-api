const passwords = require('../../data').passwords;

module.exports = app => {
  app.get("/passwords", (request, response) => {
    response.json(passwords);
  });

  for(let i = 0; i < passwords.length; i++) {
    app.get(`/passwords/${i}`, (request, response) => {
      response.json(passwords[i]);
    });
  }
}