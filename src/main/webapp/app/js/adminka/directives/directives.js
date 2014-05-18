var adminkaDirectives = angular.module('adminkaDirectives', ['service']);

adminkaDirectives.directive('adminkaMenu', function(){
    return {
        templateUrl: 'app/js/adminka/directives/qAdminkaMenu.html',
        scope: {
            currentItemKey:'@currentItemKey'
        },
        controller: function($scope, $element, $attrs, $transclude, Config){
            console.log('currentItemKey'+$scope.currentItemKey);

            $scope.items = Config.getAdminkaMenuItems();
        }
    }
});