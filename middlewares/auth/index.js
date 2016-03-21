
module.exports.isAuthenticated = function(req,res,next){
    if (!req.isAuthenticated())
        return res.status(401).json({message:'Unauthorized. Please login and try again'});
    else
        return next();
};

module.exports.isAdmin = function(req,res,next){
    if (req.user.roles.filter(r => r==='Admin').length > 0)
        return res.status(403).json({message:'Forbidden. You\'re not allow to access this resource'});
    else
        return next();
};

module.exports.hasRole = function(role){
   return  function(req,res,next){
       if (req.user.roles.filter(r => r===role).length > 0)
           return res.status(403).json({message:'Forbidden. You\'re not allow to access this resource'});
       else
           return next();
   };
} ;

