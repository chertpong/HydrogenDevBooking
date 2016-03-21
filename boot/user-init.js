var User = require('./../models/auth/user');

module.exports = function(){
    User
        .remove({})
        .then(function(data){
            console.log('[-]' + 'Course ' + (data.result.ok ? 'success' : 'fail') );
            User
                .create({
                    email:'kritcg@gmail.com',
                    password:'test',
                    roles:['Admin']
                })
                .then(function(data){
                    console.log('[+] User: '+data.email);
                })
                .catch(function(err){
                    throw err;
                });
        })
        .catch(function(err){
            throw err;
        });
};