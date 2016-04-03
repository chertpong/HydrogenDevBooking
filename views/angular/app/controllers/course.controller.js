'use strict';

var controllers = angular.module('courseControllers',['courseServices']);
controllers.controller('courseController',['$scope','courseService',function($scope,courseService){
    $scope.courses = [];
    $scope.courses = courseService.query();
}]);
controllers.controller('courseViewController',['$scope','courseService','$stateParams',function($scope,courseService,$stateParams){
    $scope.course = courseService.get({id:$stateParams.id});
}]);
