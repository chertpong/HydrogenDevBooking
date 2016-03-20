'use strict';

angular.module('authControllers',[])
    .controller('loginController',['$scope','$log','authService',function($scope, $log, authService){
        $scope.username = '';
        $scope.password = '';
        $scope.login = function(){
            authService.login($scope.username,$scope.password);
        };


    }]);