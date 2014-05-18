var dir = angular.module('directives', []);

dir.directive('qImageBrowser', function () {
    return {
        restrict: 'E',
        templateUrl: '/app/js/quiz/directives/qImageBrowser.html',
        scope: {
            images: '=',
            target: '='
        },
        link: function(scope, element, attrs){
            scope.chosen = function(image){
                scope.chosenImage = image;
            }
            scope.okClick = function(){
                scope.target.image = scope.chosenImage;
                delete scope.chosenImage;
            }
            scope.cancelClick = function(){
                delete scope.chosenImage;
            }
        },
        controller: function ($scope, $element, $attrs, Config) {
            $scope.config = Config.load();
        }
    }
});


dir.directive('qGlobalMessage', ['globalMessageService',
    function (globalMessageService) {
        return {
            templateUrl: '/app/js/quiz/directives/qGlobalMessage.html',
            scope: {},
            link: function (scope, elem, attrs) {
                globalMessageService.setUpdateListener(function (messages) {
                    setTimeout(function(){
                        scope.$apply(function () {
                            scope.messages = messages;
                        });
                    });
                });
                scope.close = function (message) {
                    globalMessageService.removeMessage(message);
                }
            }
        }
    }]);

app.directive('qImageRequire', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModel) {

            ngModel.$formatters.unshift(function (value) {
                ngModel.$setValidity('imageRequire', value != undefined);
            });
        }
    }
});
