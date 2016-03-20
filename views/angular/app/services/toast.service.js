angular.module('toastService',[])
.factory('toast',['$mdToast',function($mdToast){
    return {
        serverError: serverError
    };

    function serverError( errorMessage ) {
        var toast = $mdToast.simple()
            .content(errorMessage)
            .position('top right')
            .highlightAction(true)
            .hideDelay(4000);
        $mdToast.show(toast);
    }
}]);