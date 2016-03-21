var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/',function(req,res,next){
  res.sendFile(path.join(__dirname,'../views/angular/app/index.html'));

});


// API
router.use('/api/bookings',require('./bookings')());
router.use('/api/courses', require('./courses')());
//Authentication
router.use('/api/auth',require('./auth')());

module.exports = router;
