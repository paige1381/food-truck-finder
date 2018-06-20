const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config();
const axios = require('axios');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));


const getLocationData = async (location) => {
  try {
    return await
    console.log(response.data);
  }
  catch (error) {
    console.log(error.message);
  }
}


app.get('/', (req, res) => {
  res.send('working');
});


app.get('/foodTrucks', (req, res) => {
  res.render('index.ejs', {
    embedMap: 'https://www.google.com/maps/embed/v1/place?key=' + process.env.KEY + '&q=San+Francisco'
  });
});


app.post('/foodTrucks', (req, res) => {
  res.redirect('/foodTrucks/' + req.body.searchPhrase);
});


app.get('/foodTrucks/:searchPhrase', (req, res) => {
  axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + req.params.searchPhrase + '&inputtype=textquery&fields=geometry&key=' + process.env.KEY).then(response => {
    console.log(response.data.candidates[0].geometry.location.lat);
    console.log(response.data.candidates[0].geometry.location.lng);
    res.render('index.ejs', {
      embedMap: 'https://www.google.com/maps/embed/v1/place?key=' + process.env.KEY + '&q=' + req.params.searchPhrase,
    });
  });
});



app.listen(PORT, console.log('listening on port', PORT));
