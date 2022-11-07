// import database from "./db_functions"

var express = require('express');
var mongo = require('mongodb');
const multer = require('multer');
var app = express();

//Mongo features
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

// const upload = multer()

const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Mongo database connection method 1
var url = "mongodb://localhost:27017/NodeAppDatabase";

MongoClient.connect(url,
  function (err, db) {
    if (err) throw err;
    global.dbo = db.db("NodeAppDatabase");
  });

// Mongo database connection method 2
// var mongoclient = new MongoClient(new Server("localhost", 27017), { native_parser: true });
// mongoclient.open(function (err, mongoclient) {

//   let db = mongoclient.db("NodeAppDatabase");
//   let coll = db.collection("login");
//   coll.insert({ username: "Nischay", password: "GGGGhHHHi" });
//   mongoclient.close();
// });




// set the view engine to ejs
app.set('view engine', 'ejs');

// CSS stylesheet
app.use(express.static(path.join(__dirname, "public")));

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
    { name: 'Tux', organization: "Linux", birth_year: 1996 },
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
  ]
  var tagline = "No programming concept is complete without a cut mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/login', function (req, res) {
  res.render('pages/loginform');
});

app.post('/auth/createlogin', (req, res) => {
  let userId = req.body.userId;
  let userPassword = req.body.userPassword;
  let userEmail = req.body.userEmail;
  let search = dbo.collection("students").insertOne({ id: userId.toLowerCase(), password: userPassword, email: userEmail });
  res.redirect('/login');
})
app.post('/auth/login', (req, res) => {
  let userId = req.body.userId;
  let userPassword = req.body.userPassword;
  let search = dbo.collection("students").find({ id: userId });
  results.then(data => {
    if (data.password === userPassword) {
      console.log("Login successfull");
    } else {
      console.log("Invalid login");
    }
  })
  res.redirect('/login');
});

const port = process.env.PORT;
app.listen(port);
console.log('Server is listening on port', port);