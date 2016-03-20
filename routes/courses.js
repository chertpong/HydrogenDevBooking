var express = require('express');
var router = express.Router();
var template = require('./template/restful');
var Course = require('./../models/course');

module.exports = () => {
    return router
        .get('/'        , template.getAll(Course))
        .get('/:id'     , template.getById(Course));
        // .post('/'       , template.create(Course))
        // .put('/:id'     , template.update(Course))
        // .delete('/:id'  , template.delete(Course))
};
