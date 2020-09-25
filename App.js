const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})

require('./routes/get')(app);

app.listen(PORT, console.log('server is on'));