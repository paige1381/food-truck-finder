const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const axios = require('axios');

const foodTrucksController = require('./controllers/foodTrucks.js');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use('/foodTrucks', foodTrucksController);

app.get('/', (req, res) => {
  res.redirect('/foodTrucks');
});

app.listen(PORT, console.log('listening on port', PORT));
