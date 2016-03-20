var express = require('express');
var router = express.Router();
var template = require('./template/restful');
var Booking = require('./../models/booking');

module.exports = () => {
    return router
        .get('/'        , template.getAll(Booking))
        .get('/:id'     , template.getById(Booking));
        // .post('/'       , template.create(Booking))
        // .put('/:id'     , template.update(Booking))
        // .delete('/:id'  , template.delete(Booking))
};
