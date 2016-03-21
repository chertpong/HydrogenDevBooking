var express = require('express');
var router = express.Router();
var template = require('./template/restful');
var Course = require('./../models/course');
var auth = require('./../middlewares/auth');

module.exports = () => {
    return router
        .get('/'                                            , template.getAll(Course))
        .get('/:id'                                         , template.getById(Course))
        .post('/'       , auth.isAuthenticated, auth.isAdmin, template.create(Course))
        .put('/:id'     , auth.isAuthenticated, auth.isAdmin, template.update(Course))
        .delete('/:id'  , auth.isAuthenticated, auth.isAdmin, template.delete(Course));
};
