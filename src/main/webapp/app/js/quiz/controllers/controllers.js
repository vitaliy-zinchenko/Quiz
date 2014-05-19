var controllers = angular.module('controllers', ['ngRoute', 'service', 'directives', 'commonDirectives']);

controllers.controller('ListCtrl', ['$scope', '$http', 'Category',
    function ($scope, $http, Category) {
        $scope.categories = Category.query();
        $scope.removeCategory = function(category){
            console.log('rC()');
            console.log(category);
        }
        $scope.removeTest = function(test){
            console.log('rT()');
            console.log(test);
        }
    }]);

controllers.controller('CategoryCtrl',
    ['$scope', 'Category', '$routeParams',
        function ($scope, Category, $routeParams) {
            $scope.category = Category.get({id: $routeParams.categoryId});
            $scope.removeCategory = function(category){
                console.log('rC()');
                console.log(category);
            }
            $scope.removeTest = function(test){
                console.log('rT()');
                console.log(test);
            }
        }]);

controllers.controller('TestCtrl',
    ['$scope', '$routeParams', 'Test',
        function ($scope, $routeParams, Test) {
            $scope.test = Test.get({id: $routeParams.testId});
        }]);

controllers.controller('TaskCtrl',
    ['$scope',
        function ($scope) {
            console.log('TaskCtrl');
            $scope.init = function (task) {
                $scope.task = task;
            }
            $scope.check = function () {
                console.log($scope.answer);
                if ($scope.task.answer === $scope.answer) {
                    $scope.answerResult = 'right';
                } else {
                    $scope.answerResult = 'wrong';
                }
            }
        }]);

controllers.controller('CreateTestCtrl',
    ['$scope', '$log', '$location', 'Category', 'Test', 'Image',
        'Config', '$routeParams',
        function ($scope, $log, $location, Category, Test, Image,
                  Config, $routeParams) {
            console.log('CreateTestCtrl');
            $scope.category = Category.get({id: $routeParams.categoryId});
            $scope.test = $scope.test || {};
            $scope.test.category = $scope.test.category || {};
//            $scope.images = Image.query();
//            $scope.config = Config.load();
//            $scope.test.category.id = $scope.test.category.id || $scope.category.id;
            $scope.save = function () {
                $scope.test.category.id = $scope.test.category.id || $scope.category.id;
                console.log($scope.test);
                Test.save($scope.test, function(test){
                    console.log(test);
                    console.log('test saved');
                    $location.path('/test/'+test.id);
                });
            }
            $scope.addTask = function () {
                console.log('addTask');
                $scope.test.tasks = $scope.test.tasks || [];
                $scope.test.tasks.push({});
            }
            $scope.modalOkClick = function(){
                console.log('OK');
            }
            $scope.modalCancelClick = function(){
                console.log('cancel');
            }
        }]);

controllers.controller('UpdateTestCtrl',
    ['$scope', '$location', 'Test', 'Image', 'Config', '$routeParams',
        function($scope, $location, Test, Image, Config, $routeParams){
            $scope.test = Test.get({id: $routeParams.testId});
//            $scope.images = Image.query();
//            $scope.config = Config.load();
            $scope.save = function () {
                $scope.test.$update({}, function(test){
                    $location.path('/test/'+test.id);
                });
            }
            $scope.addTask = function () {
                $scope.test.tasks = $scope.test.tasks || [];
                $scope.test.tasks.push({});
            }
            $scope.modalOkClick = function(){
                console.log('OK');
            }
            $scope.modalCancelClick = function(){
                console.log('cancel');
            }
            $scope.removeTask = function(task){
                $scope.test.tasks.splice($scope.test.tasks.indexOf(task), 1);
            }
        }]);

controllers.controller('CreateCategoryCtrl',
    ['$scope', '$routeParams', 'Category', 'Tag',
        function($scope, $routeParams, Category, Tag ){
            $scope.category = {};
            $scope.category.tags = [];
            if($routeParams.categoryId){
                $scope.category = Category.get({id:$routeParams.categoryId});
            }
            $scope.tags = Tag.query();

            $scope.addTag = function(tag){
                console.log('addTag');
                console.log(tag);
                $scope.category.tags.push(tag);
                $scope.tags.splice($scope.tags.indexOf(tag), 1);
            }

            $scope.removeTag = function(tag){
                console.log('removeTag');
                console.log(tag);
                $scope.tags.push(tag);
                $scope.category.tags.splice($scope.category.tags.indexOf(tag), 1);
            }

            $scope.save = function(image){
                console.log($scope.category);
                console.log(image);
            }
        }]);
