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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todo', { title: 'Express todo from pug template!!!' });
});

module.exports = router;
