'use strict';

angular.module('authServices',['ngResource'])
.factory('authService',['BASE_URL','$http',function(BASE_URL,$http){
    return {
        login: function(username,password){
            $http
                .post(BASE_URL+'/api/auth/login',{username:username,password:password})
                .then(function(response){
                    console.log(response);
                });
        }
    };
}]);
