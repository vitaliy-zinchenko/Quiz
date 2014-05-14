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

