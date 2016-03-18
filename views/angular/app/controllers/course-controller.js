'use strict';

angular.module('courseControllers',['courseServices'])

.controller('courseController',['$scope','courseService',function($scope,courseService){
    $scope.courses = [courseService.getAll()];
}]);