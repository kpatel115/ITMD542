var express = require('express');
var router = express.Router();

let data = [
  {name: "karan", id: "ddad031e-e030-419a-9518-2f16534edeaf"},
  {name: "patel", id: "e4a9c8f6-4bb8-44f5-8915-8df78500f6e3"}
]


/* GET Contacts Database. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Express Contacts', contacts: data});
});

/* Get Create Contact Form */
router.get('/add', function(req, res, next) {
  res.render('contacts_add', { title: 'Add An Express Contact' });
});

module.exports = router;
