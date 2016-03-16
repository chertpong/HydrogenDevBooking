var express = require('express');
var router = express.Router();
var httpError = require('./../../util/errors/http-error');

module.exports = function (Model){
    router.get('/',(req,res,next)=>{
        Model
            .find({})
            .exec()
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    });

    router.get('/:id',(req,res,next)=>{
        Model
            .findOne({_id:req.params.id})
            .exec()
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    });

    router.post('/',(req,res,next)=>{
        Model
            .create(req.body)
            .then(data => {
                return res.status(201).json(data);
            })
            .catch(err => {
                next(err);
            })
    });

    router.put('/:id',(req,res,next)=>{
        Model
            .findOne({_id:req.params.id})
            .then(data => {
                if(!data)
                    throw httpError(404,'Not found');
                else
                    return data;
            })
            .then(data => {
                data
                    .update(req.body)
                    .then( updated =>{
                        return res.json(updated);
                    })
            })
            .catch(err => {
                next(err);
            })
    });

    router.delete('/:id',(req,res,next)=>{
        Model
            .findOneAndRemove({_id:req.params.id})
            .then(data => {
                if(data!=null)
                    return res.status(204).json({message:'removed successfully'});
                else
                    return res.json(data); // never be reached
            })
            .catch(err => {
                next(err);
            })
    });

    return router;
};
