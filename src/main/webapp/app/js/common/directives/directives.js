var dir = angular.module('commonDirectives', []);

dir.directive('qModalWind', function () {
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'app/js/common/directives/qModalWind.html',
        scope: {
            isShow: '=',
            title: '@',
            okClick: '&',
            okLabel: '@',
            cancelClick: '&',
            cancelLabel: '@'
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

dir.directive('qLoading', function(){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'app/js/common/directives/qLoading.html',
        scope:{
            object: '=',
            message: '@'
        },
        link: function($scope, $element, $attrs, $transclude){
        }
    }
});

dir.directive('qEmpty', function(){
    return {
        replace: true,
        transclude: true,
        restrict: 'AE',
        templateUrl: 'app/js/common/directives/qEmpty.html',
        scope: {
            object: '=object',
            parent: '=parent'
        },
        link: function($scope, $element, $attrs){
            $scope.isShow = function(){
//                (parent.$resolved == true || object.$resolved == true ||
//                    (parent == undefined && object.$resolved == undefined) || object == undefined)
//                && (object.length == 0 || object == undefined)

                //TODO | NEED REFACTORING !!!!!
                return (($scope.parent && $scope.parent.$resolved == true) || ($scope.object && $scope.object.$resolved == true) ||
                    ($scope.parent == undefined && ($scope.object && $scope.object.$resolved == undefined)) || $scope.object == undefined)
                && (($scope.object && $scope.object.length == 0) || $scope.object == undefined);
            }
        }
    }
});

dir.directive('qValidFile', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attrs, ngModel) {
            el.bind('change', function () {
                scope.$apply(function () {
                    ngModel.$setViewValue(el.val());
                    ngModel.$render();
                });
            });
            el.bind('click', function () {
                scope.$apply(function () {
                    ngModel.$setViewValue();
                    ngModel.$render();
                });
            });
        }
    }
});