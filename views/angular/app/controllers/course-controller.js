'use strict';

angular.module('courseControllers',[])
.controller('courseController',['$scope',function($scope){
    $scope.courses = [
        {
            name:'Java OOP',
            duration:'10 hours',
            price:1000,
            description:'Best java basic course',
            thumbnail:'https://upload.wikimedia.org/wikipedia/en/8/88/Java_logo.png',
            tags:[
                'Java','Beginner'
            ]
        }
    ];
}]);