var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;
var userSchema = new Schema({
        email        :{type:String, required:true, unique:true},
        password    :{type:String, required:true},
        roles       :[{type:String}]
    },
    {timestamps: true}
);
//validate
userSchema.path('email').validate(function(email){
    return validateEmail(email);
},'Email is invalid');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

userSchema.pre('save',function(next){
    if(this.password) {
        var salt = bcrypt.genSaltSync(10);
        this.password  = bcrypt.hashSync(this.password, salt);
    }
    next();
});

userSchema.methods.authenticate =  function(email,password){
    return new Promise((resolve,reject)=>{
        if(this.email === email){
            bcrypt.compare(password,this.password,function(err,result){
                if(err) return reject(false);
                return resolve(result);
            });
        }
        else{
            return reject(false);
        }
    });
};
var User = mongoose.model('User', userSchema,'Users');

module.exports = User;