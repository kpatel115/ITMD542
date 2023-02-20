var express = require('express');
var router = express.Router();

const usersArray = [
  {
    "contactID": 1,
    "firstName": "contact",
    "lastName": "example",
    "email": "example@gmail.com",
    "notes": "",
    "dateTime": 858
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    contact1: _.sample(usersArray)
  });
  
  res.render('users', { title: "Karan's Express Contact App" });
  res.send('respond with a resource');
});

module.exports = router;
