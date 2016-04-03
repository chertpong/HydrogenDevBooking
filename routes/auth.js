var express = require('express');
var router = express.Router();
var template = require('./template/restful');
var User = require('./../models/auth/user');
var passport = require('passport');

module.exports = () => {
    return router
        .post('/login'  , (req,res,next)=>{
            passport.authenticate('local', (err, user, info) => {
                if (err) return next(err);
                if (!user) return res.status(400).json(info);
                req.logIn(user, function(err) {
                    if (err) return next(err);
                    return res.status(200).json({message:'success'});
                });
            })(req, res, next)
        })
        .post('/logout' , (req,res,next)=>{
            req.logout();
            return res.status(200).json({message:'success'});
        });
        // .get('/'     , template.getAll(User));
    // .post('/'       , template.create(User))
    // .put('/:id'     , template.update(User))
    // .delete('/:id'  , template.delete(User))

};