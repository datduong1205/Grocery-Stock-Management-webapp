var express = require('express');
var router = express.Router();

/* GET / page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});

/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('about', { 
    title: 'About Us'  
  });
});

/* GET Contact page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us'  
  });
});

module.exports = router;


