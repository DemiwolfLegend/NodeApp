var express = require('express');
var app = express();

const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

// set the view engine to ejs
app.set('view engine', 'ejs');

// CSS stylesheet
app.use(express.static(path.join(__dirname, "public")));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    {name:'Sammy', organization:"DigitalOcean", birth_year: 2012},
    {name:'Tux', organization:"Linux",birth_year:1996},
    {name:'Moby Dock', organization:"Docker",birth_year:2013}
  ]
  var tagline = "No programming concept is complete without a cut mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

const port = process.env.PORT;
app.listen(port);
console.log('Server is listening on port', port);