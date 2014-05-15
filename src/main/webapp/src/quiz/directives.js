var directives = angular.module('directives', []);

directives.directive('empty', function(){
    return {
        templateUrl: 'src/empty.html',
        scope: {
            object: '=object',
            parent: '=parent',
            message: '@message'
        },
        link: function($scope, $element, $attrs){
        }
    }
});

myApp.directive('qImageBrowser', function () {
    return {
        restrict: 'E',
        templateUrl: '/src/quiz/tmpl/imageBrowser.html',
        scope: {
            images: '=',
            target: '=',
            choosing: '='
        },
        link: function(scope, element, attrs){
            scope.$watch('target', function(){
                console.log(scope.target);
            });
            scope.chosen = function(image){
                scope.target.image = image;
            }
        },
        controller: function ($scope, $element, $attrs, Config) {
            $scope.config = Config.load();
        }
    }
})

directives.directive('myDir', function(){
    return {
        templateUrl: "src/myDir.html",
        link: function($scope, $element, $attrs){
//            console.log('in myDir link')
        },
//        transclude: true,
        scope: {}//,
//        replace: true
    }
});

