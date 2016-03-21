var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var courseSchema = new Schema({
    name        :{type:String, required:true, unique:true},
    duration    :{type:Number, required:true, get:durationFormat},
    price       :{type:Number},
    description :{type:String},
    thumbnail   :{type:String},
    tags        :[
        {type:String}
    ]
},
    {timestamps: true}
);


function durationFormat(duration){
    return {
        hour    :(duration - (duration % 60)) / 60 ,
        minute  : duration % 60
    };
}

courseSchema.set('toObject', { getters: true });
courseSchema.set('toJSON', { getters: true });
var Course = mongoose.model('Course', courseSchema,'Courses');

module.exports = Course;