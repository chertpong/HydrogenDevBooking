module.exports = function(status,message){
    var err = new Error(message);
    err.status = status;
    return err;
};