'use strict';

angular.module('courseServices',['ngResource'])
    .factory('courseService',function($resource){
        return $resource(BASE_URL+'/api/courses',{id:_id});
    });
