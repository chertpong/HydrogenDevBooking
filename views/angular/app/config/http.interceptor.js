angular.module('httpConfigs',[])
.factory('httpErrorInterceptor',['$rootScope','$q',function($rootScope, $q ){
    return {
        responseError: responseError
    };

    function responseError( response ) {
        switch ( response.status ) {
            case 401:
                $rootScope.$broadcast( 'httpError', { message: 'Error code: 401\nUnauthorized. Please login' } );
                break;
            case 403:
                $rootScope.$broadcast( 'httpError', { message: 'Error code: 403\nForbidden. Please You are not allow to access this' } );
                break;
            case 500:
                $rootScope.$broadcast( 'httpError', { message: 'Error code: 500\nAn unexpected error has occurred. Please try again.' } );
                break;
        }
        return $q.reject( response );
    }
}]);