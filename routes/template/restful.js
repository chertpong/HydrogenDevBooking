var httpError = require('./../../util/errors/http-error');

module.exports.getAll = (Model) => {
    return (req,res,next)=>{
        Model
            .find({})
            .exec()
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(err => {
                return next(err);
            });

    };
};

module.exports.getById = (Model) => {
    return (req,res,next)=>{
        Model
            .findOne({_id:req.params.id})
            .exec()
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(err => {
                return next(err);
            })
    };
};

module.exports.create = (Model) => {
    return (req,res,next)=>{
        Model
            .create(req.body)
            .then(data => {
                return res.status(201).json(data);
            })
            .catch(err => {
                return next(err);
            })
    };
};

module.exports.update = (Model) => {
    return (req,res,next)=>{
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
                return next(err);
            })
    };
};

module.exports.delete = (Model) => {
    return (req,res,next)=>{
        Model
            .findOneAndRemove({_id:req.params.id})
            .then(data => {
                if(data!=null)
                    return res.status(204).json({message:'removed successfully'});
                else
                    return res.json(data); // never be reached
            })
            .catch(err => {
                return next(err);
            })
    };
};
