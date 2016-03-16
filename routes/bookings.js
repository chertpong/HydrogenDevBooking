var template = require('./template/restful');
var Booking = require('./../models/booking');

module.exports = template(Booking);
