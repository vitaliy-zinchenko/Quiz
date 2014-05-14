var dir = angular.module('commonDirectives', []);

dir.directive('tModalWind', function () {
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'src/common/directives/tModelWind.html',
        scope: {
            isShow: '=',
            title: '@'
        },
        link: function (scope, elm, attrs) {
            scope.$watch('isShow', function(){
                if(!scope.isShow) return;
                $(elm).modal({
                    show: true
                });
            });
            $(elm).on('hidden.bs.modal', function (e) {
                scope.$apply(function(){
                    scope.isShow = false;
                });
            })
        }
    }
});

dir.directive('loading', function(){
    return {
        restrict: 'EA',
        replace: true,
//        transclude: true,
        template: '<p>assa</p>',//'src/common/directives/tLoading.html',
        scope:{
            object: '=object',
            customMessage: '@message'
        },
        link: function($scope, $element, $attrs, $transclude){
            $scope.message = 'Loading...';
            if($scope.customMessage) $scope.message = $scope.customMessage;
            console.log("lll");
        }
    }
});
