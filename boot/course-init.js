var Course = require('./../models/course');

module.exports = function(){
    Course
        .remove({})
        .then(function(data){
            console.log('[-]' + 'Course ' + (data.result.ok ? 'success' : 'fail') );
            Course
                .create({
                    name:'Java OOP',
                    duration:100,
                    price:1000,
                    description:'Best java basic course',
                    thumbnail:'https://upload.wikimedia.org/wikipedia/en/8/88/Java_logo.png',
                    tags:[
                        'Java','Beginner'
                    ]}
                )
                .then(function(data){
                    console.log('[+] Course: '+data.name);
                })
                .catch(function(err){
                    throw err;
                });
        })
        .catch(function(err){
            throw err;
        });
};