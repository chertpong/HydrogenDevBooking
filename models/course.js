var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var courseSchema = new Schema({
    name        :{type:String, required:true, unique:true},
    duration    :{type:Number, required:true},
    price       :{type:Number},
    description :{type:String},
    thumbnail   :{type:String},
    tags        :[
        {type:String}
    ]
},
    {timestamps: true}
);

var Course = mongoose.model('Course', courseSchema,'Courses');

module.exports = Course;