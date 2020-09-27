const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6400;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})

require('./routes/get/all-routes')(app);

app.listen(PORT, console.log('server is on'));