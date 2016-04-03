'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMaterial',
  'httpConfigs',
  'toastService',
  'courseControllers',
  'bookingControllers',
  'authServices',
  'authControllers'
])
.constant('BASE_URL','http://localhost:3000')
.config([
    '$logProvider','$stateProvider','$urlRouterProvider','$mdThemingProvider','$httpProvider',
    function($logProvider,$stateProvider,$urlRouterProvider,$mdThemingProvider,$httpProvider) {
        $logProvider.debugEnabled(true);

        $httpProvider.interceptors.push( 'httpErrorInterceptor' );

        $urlRouterProvider.otherwise('/courses');
        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                  root : {
                    template : '<div ui-view="content"></div>'
                  },
                  navbar: {
                    templateUrl: 'templates/navbar.html',
                    controller: 'navbarController'
                  },
                  sidebar: {
                    templateUrl: 'templates/sidebar.html',
                    controller: 'sidebarController'
                  }
                }
            })
            .state('root.courses', {
                url: '/courses',
                views: {
                    content : {
                        templateUrl: 'templates/courses/list.html',
                        controller: 'courseController'
                    }
                }
            })
            .state('root.courses-view', {
                url: '/courses/:id',
                views: {
                    content : {
                        templateUrl: 'templates/courses/view.html',
                        controller: 'courseViewController'
                    }
                }
            })
            .state('root.booking', {
                url: '/booking',
                views: {
                    content : {
                        templateUrl: 'templates/booking/index.html',
                        controller: 'bookingController'
                    }
                }
            })
            .state('root.login', {
                url: '/auth/login',
                views: {
                    content : {
                        templateUrl: 'templates/login.html',
                        controller: 'loginController'
                    }
                }
            }
        );

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('indigo');
}])
.controller('navbarController',function($scope, $timeout, $mdSidenav, $log){
    $scope.toggleLeft = buildDelayedToggler('left-sidebar');
    $scope.isOpenRight = function(){
        return $mdSidenav('left-sidebar').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;
        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }
})
.controller('sidebarController',function($scope, $timeout, $mdSidenav, $log){
    $scope.close = function (){
        $mdSidenav('left-sidebar').close()
            .then(function () {
                $log.debug("close sidebar is done");
            });
    };
})
.run(['$rootScope','toast',function($rootScope,toast){
    $rootScope.$on( 'httpError', function( event, eventData ) {
        toast.serverError( eventData.message );
    })
}]);
