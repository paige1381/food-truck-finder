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

// app.get('/foodTrucks', (req, res) => {
//   res.render('index.ejs', {
//     staticMap: 0
//   });
// });
//
// app.post('/foodTrucks', (req, res) => {
//   res.redirect('/foodTrucks/' + req.body.searchPhrase);
// });
//
// app.get('/foodTrucks/:searchPhrase', (req, res) => {
//   axios.all([
//     axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + req.params.searchPhrase + '&inputtype=textquery&fields=geometry,name&key=' + process.env.KEY),
//     axios.get('https://data.sfgov.org/resource/6a9r-agq8.json?$where=expirationdate%20IS%20NULL%20and%20latitude%20!=%200%20and%20longitude%20!=%200')
//   ]).then(axios.spread((response1, response2) => {
//     let name = response1.data.candidates[0].name;
//     let latitude = response1.data.candidates[0].geometry.location.lat;
//     let longitude = response1.data.candidates[0].geometry.location.lng;
//     let foodTrucks = [];
//     for (let i = 0; i < response2.data.length; i++) {
//       foodTrucks.push({
//         name: response2.data[i].applicant,
//         address: response2.data[i].address,
//         latDiff: Math.abs(latitude - response2.data[i].latitude),
//         longDiff: Math.abs(longitude - response2.data[i].longitude),
//         distance: Math.abs(latitude - response2.data[i].latitude) + Math.abs(longitude - response2.data[i].longitude),
//         latitude: response2.data[i].latitude,
//         longitude: response2.data[i].longitude
//       })
//     }
//     foodTrucks = foodTrucks.sort((a, b) => a.distance - b.distance).slice(0,9);
//     let markers = "&zoom=14&size=600x600&maptype=roadmap";
//     for (let i = 0; i < foodTrucks.length; i++) {
//       markers = markers + '&markers=color:red%7Clabel:' + (i + 1) + '%7C' + foodTrucks[i].latitude + ',' + foodTrucks[i].longitude;
//     }
//     res.render('index.ejs', {
//       embedMap: 'https://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + markers + '&markers=color:blue%7Clabel:' + name + '%7C' + latitude + ',' + longitude + '&key=' + process.env.KEY,
//       staticMap: 1,
//       foodTrucks: foodTrucks,
//     });
//   })).catch(error => {
//     console.log('error:', error);
//   });
// });


app.listen(PORT, console.log('listening on port', PORT));
