'use strict';

angular.module('bookingControllers',[])
.controller('bookingController',['$scope','$log',function($scope, $log){
    $scope.minimumEnrollment = 5;
    $scope.enrollment = 0;
    $scope.courseIsOpen = $scope.enrollment >= $scope.minimumEnrollment;
    $scope.showHints = true;

    $scope.user = {
        name: "",
        facebook: "",
        phone: ""
    };

}]);