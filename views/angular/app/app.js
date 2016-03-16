'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMaterial'
]).
config([
    '$stateProvider','$urlRouterProvider','$mdThemingProvider',
    function($stateProvider,$urlRouterProvider,$mdThemingProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    navbar: {
                        templateUrl: 'templates/navbar.html',
                        controller: 'navbarController'
                    },
                    sidebar: {
                        templateUrl: 'templates/sidebar.html',
                        controller: 'sidebarController'
                    },
                    content : {

                    }
                }
            })
            .state('courses', {
                url: '/courses',
                views: {
                    navbar: {
                        templateUrl: 'templates/navbar.html',
                        controller: 'navbarController'
                    },
                    sidebar: {
                        templateUrl: 'templates/sidebar.html',
                        controller: 'sidebarController'
                    },
                    content : {

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
    $scope.close = function () {
        $mdSidenav('left-sidebar').close()
            .then(function () {
                $log.debug("close sidebar is done");
            });
    };
});
