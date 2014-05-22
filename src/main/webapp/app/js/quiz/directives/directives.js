var dir = angular.module('directives', ['service', 'commonDirectives']);

dir.directive('qImageBrowser', ['Image', function (Image) {
    return {
        restrict: 'E',
        templateUrl: 'app/js/quiz/directives/qImageBrowser.html',
        scope: {
            target: '='
        },
        link: function(scope, element, attrs){
            scope.chosen = function(image){
                scope.chosenImage = image;
            };
            scope.okClick = function(){
                scope.target.image = scope.chosenImage;
                delete scope.chosenImage;
            };
            scope.cancelClick = function(){
                delete scope.chosenImage;
            };
            scope.images = Image.query();
            console.log(scope.images);
        },
        controller: function ($scope, $element, $attrs, Config) {
            $scope.config = Config.load();
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

app.directive('qTagsBrowser', ['Tag', function(Tag){
    return {
        restrict: 'E',
        templateUrl: 'app/js/quiz/directives/qTagsBrowser.html',
        scope: {
            target: '='
        },
        link: function(scope, elm, attrs){
            scope.tags = Tag.query();

            scope.addTagToTarget = function(tag){
                if(!scope.target.tags) scope.target.tags = [];
                if(scope.target.tags.indexOf(tag) == -1) scope.target.tags.push(tag);
            }
        }
    }
}]);

app.directive('qChosenTagsBrowser', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/js/quiz/directives/qChosenTagsBrowser.html',
        scope: {
            target: '='
        },
        link: function(scope, elm, attrs){
            scope.removeTagFromTarget = function(tag){
                scope.target.tags.splice(scope.target.tags.indexOf(tag), 1);
            };
        }
    }
});