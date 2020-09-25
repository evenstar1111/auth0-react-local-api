const emails = require('./emails');
const users = require('./users');
const passwords = require('./passwords');
const movies = require('./movies');
const root = require('./root');

module.exports = function(app) {
  emails(app);
  users(app);
  passwords(app);
  movies(app);
  root(app);
}