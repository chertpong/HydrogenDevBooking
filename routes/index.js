var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/',function(req,res,next){
  res.sendFile(path.join(__dirname,'../views/angular/app/index.html'));

});

router.use('/api/bookings',require('./bookings'));
router.use('/api/courses', require('./courses')());


module.exports = router;
