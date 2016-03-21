'use strict';

 var LocalStrategy = require('passport-local').Strategy,
    User = require('./../models/auth/user');

module.exports = function(passport){

// Serialize sessions
    passport.serializeUser(function(user, done) {
        var sessionUser = { _id: user._id, username: user.email, email: user.email, roles: user.roles };
        done(null, sessionUser);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({ _id: id }, function (err, user) {
            done(err, user);
        });
    });

// Use local strategy
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        function(email, password, done) {
            User.findOne({ email: email }, function (err, user) {
                if (err) return done(err);
                if (!user) {
                    return done(null, false, {
                        'errors': {
                            'email': {type: 'Email is not registered.'}
                        }
                    });
                }
                user
                    .authenticate(email,password)
                    .then((result)=>{
                        if (!result){
                            return done(null, false, {
                                'errors': {
                                    'password': {type: 'Password is incorrect.'}
                                }
                            });
                        }
                        else {
                            return done(null, user);
                        }
                    })
                    .catch((error)=>{
                        next(error);
                    });


            });
        }
    ));

    return passport;
};