const express = require('express');
const bodyParser = require('body-parser')
const videogamesRoutes = require('./routes/videogames')
const errorController = require('./controllers/error')

// Initialize server
const app = express();
const port = process.env.PORT || 3001;

// JSON parser
app.use(bodyParser.json());

// Allow GET, POST, PUT, DELETE
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.setHeader('Access-Control-Allow-HEADERS', 'Content-Type, Authorization');
  next();
});

// Identify main route
app.use('/videogames', videogamesRoutes);

// Identify error routes
app.use(errorController.get404);
app.use(errorController.get500);

// Show and listen on specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});