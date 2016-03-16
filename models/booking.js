var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bookingSchema = new Schema({
    courseId: {type: Schema.Types.ObjectId,ref:'Course', required:true},
    students:[
        {
            name:{type:String},
            facebook:{type:String},
            phoneNumber:{type:String}
        }
    ]
});

var Booking = mongoose.model('Booking', bookingSchema,'Bookings');

module.exports = Booking;