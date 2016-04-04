var Booking = require('./../models/booking');
var Course = require('./../models/course');

module.exports = () => new Promise((resolve,reject) => {
  
  var removeBooking = () => Booking
    .remove({})
    .then( removeStatus => {
      console.log('[-]' + ' Booking ' + (removeStatus.result.ok ? 'success' : 'fail') );
      return Promise.resolve( removeStatus.result.ok );
    })
    .catch( err => Promise.reject(err) );

  var getCourseId = () => Course
    .find({})
    .exec()
    .then( c => c[0]._id )
    .catch( err => Promise.reject(err) );


  var createBooking = (id) => {
    Booking
      .create({
        courseId: id,
        schedules: [
          {
            startTime: new Date('2016-4-9T12:30:00'),
            endTime: new Date('2016-4-9T14:00:00')
          },
          {
            startTime: new Date('2016-4-10T12:30:00'),
            endTime: new Date('2016-4-10T14:00:00')
          }
        ],
        students: [
          {
            name:'Krit',
            facebook:'http://www.facebook.com/invather',
            phoneNumber:'0873570205'
          }
        ]
      })
      .then(function(booking){
        console.log('[+] Booking: [courseId:' + booking.courseId + ']');
        return resolve(booking);
      })
      .catch(function(err){
        return reject(err);
      });
  };

  return removeBooking().then(() => getCourseId()).then(id => createBooking(id));
});