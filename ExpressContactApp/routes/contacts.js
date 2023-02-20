var express = require('express');
var router = express.Router();
const { randomUUID } = require("node:crypto");

let data = [
  {name: "karan", id: "ddad031e-e030-419a-9518-2f16534edeaf"},
  {name: "patel", id: "e4a9c8f6-4bb8-44f5-8915-8df78500f6e3"}
]


/* GET Contacts Database. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Express Contacts', contacts: data});
});

/* GET Create Contact Form */
router.get('/add', function(req, res, next) {
  res.render('contacts_add', { title: 'Add An Express Contact' });
});

/* POST Create Contact  */
router.post('/add', function(req, res, next) {
  console.log(req.body);
  if(req.body.firstName.trim() === "") {
    res.render('contacts_add', { title: "Add a Contact", msg: "Please fill out the form"});
  } else {
    // add contact to database
    res.redirect('/contacts');
    res.send('contact created');
  }
  
});



module.exports = router;
