var dir = angular.module('commonDirectives', []);

dir.directive('tModelWind', function () {
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'src/common/directives/tModelWind.html',
        scope: {
            isShow: '=isShow',
            title: '@title'
        },
        link: function (scope, elm, attrs) {
            scope.$watch('isShow', function(){
                console.log('isShow = '+scope.isShow);
                if(!scope.isShow) return;
                $(elm).modal({
                    show: scope.isShow
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
