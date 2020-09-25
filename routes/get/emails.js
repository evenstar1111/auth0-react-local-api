const emails = require('../../data').emails;

module.exports = app => {
  app.get("/emails", (request, response) => {
    response.json(emails);
  })

  for(let i = 0; i < emails.length; i++) {
    app.get(`/emails/${i}`, (request, response) => {
      response.json(emails[i]);
    })
  }
}