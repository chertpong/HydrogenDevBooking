'use strict';

angular.module('courseServices',['ngResource'])
    .factory('courseService',function($resource,BASE_URL){
        return $resource(BASE_URL+'/api/courses',{id:'@_id'});
    });
