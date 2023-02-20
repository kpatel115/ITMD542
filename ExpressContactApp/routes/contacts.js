var express = require('express');
var router = express.Router();

let data = [
  {"contactID": "ddad031e-e030-419a-9518-2f16534edeaf",
  "firstName": "contact1",
  "lastName": "example1",
  "email": "example1@gmail.com",
  "notes": "",
  "dateTime": ""},
  {"contactID": "e4a9c8f6-4bb8-44f5-8915-8df78500f6e3",
  "firstName": "contact2",
  "lastName": "example2",
  "email": "example2@gmail.com",
  "notes": "",
  "dateTime": ""}
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Express Contacts '});
  res.send('respond with a contacts');
});

module.exports = router;
