const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('working');
});

app.get('/foodTrucks', (req, res) => {
  res.render('index.ejs', {
    embedMap: 'https://www.google.com/maps/embed/v1/place?key=' + process.env.KEY + '&q=San+Francisco'
  });
});

app.post('/foodTrucks', (req, res) => {
  try {
    res.redirect('/foodTrucks/' + req.body.searchPhrase);
  }
  catch (err) {
    res.send(err.message);
  }
});

app.get('/foodTrucks/:searchPhrase', (req, res) => {
  res.render('index.ejs', {
    embedMap: 'https://www.google.com/maps/embed/v1/place?key=' + process.env.KEY + '&q=' + req.params.searchPhrase
  });
});



app.listen(PORT, console.log('listening on port', PORT));
