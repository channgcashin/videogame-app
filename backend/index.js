const express = require('express');
const bodyParser = require('body-parser')
const videogamesRoutes = require('./routes/videogames')
const errorController = require('./controllers/error')

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.setHeader('Access-Control-Allow-HEADERS', 'Content-Type, Authorization');
  next();
});

app.use('/videogames', videogamesRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});