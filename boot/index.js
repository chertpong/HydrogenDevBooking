module.exports = function(){
  var userInit = require('./user-init');
  var courseInit = require('./course-init');
  var bookingInit = require('./booking-init');

  userInit()
    .then(() => courseInit())
    .then(() => bookingInit())
    .then(data => console.log('Done initializing data'))
    .catch(err => console.log(err));
};