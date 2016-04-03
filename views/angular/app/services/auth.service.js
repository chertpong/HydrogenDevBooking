'use strict';

angular.module('authServices',['ngResource'])
.factory('authService',['BASE_URL','$http','$window','toast',function(BASE_URL,$http,$window,toast){
    return {
        login: function(username,password){
            $http
                .post(BASE_URL+'/api/auth/login',{username:username,password:password})
                .then(function(response){

                })
                .catch(function(err){
                    toast.serverError(err.data.errors);
                });
        }
    };
}]);
