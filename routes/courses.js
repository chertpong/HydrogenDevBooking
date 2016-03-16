var template = require('./template/restful');
var Course = require('./../models/course');

module.exports = template(Course);
