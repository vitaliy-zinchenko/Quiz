var adminkaControllers = angular.module('adminkaControllers',
    ['directives', 'adminkaDirectives', 'commonDirectives', 'service', 'angularFileUpload']);

adminkaControllers.controller('AdminkaMainCtrl', ['$scope', 'Config',
    function ($scope, Config) {
        $scope.items = Config.getAdminkaMenuItems();
    }]);

adminkaControllers.controller('AdminkaImagesCtrl',
    ['$scope', 'Image', '$upload', 'globalMessageService',
        function ($scope, Image, $upload, globalMessageService) {
            $scope.images = Image.query();

            $scope.addImage = function () {
                $scope.images.push({edit: true});
                console.log($scope.images.$resolved);
            }
            $scope.edit = function (image) {
                image.edit = true;
                image.old = angular.extend({}, image, {});
            }
            $scope.cancel = function (image) {
                angular.extend(image, image.old);
                delete image.old;
                image.edit = false;
            }
            $scope.save = function (image) {
                $scope.saving = true;
                Image.save(image, function(){
                    globalMessageService.addSuccess("Image saved successfully.");
                    $scope.saving = false;
                }, function(){
                    globalMessageService.addDanger("Error during saving.");
                    $scope.saving = false;
                });
            }
            $scope.remove = function (image) {
                $scope.deleting = true;
                $scope.images.splice($scope.images.indexOf(image), 1);
                console.log($scope.images.length);
                Image.delete({id: image.id}, {},
                    function (data, headers) {
                        $scope.deleting = false;
                    },
                    function (response) {
                        $scope.deleting = false;
                        //TODO
                        console.log('ERROR');
                        console.log(response);
                    });
            }
            $scope.fileSelect = function (image, file) {
                image.file = file[0];
            }
        }]);

adminkaControllers.controller('AdminkaUsersCtrl', ['$scope',
    function ($scope) {

    }]);

adminkaControllers.controller('AdminkaTagsCtrl', ['$scope', 'Tag', 'globalMessageService',
    function ($scope, Tag, globalMessages) {
        $scope.tags = Tag.getAll();

        $scope.save = function(tag){
            if(tag.id) Tag.update(tag);
            else Tag.create(tag);
        }

        $scope.editTag = function(tag){
            console.log($scope);
        }

        $scope.removeTag = function(tag){
            Tag.delete(tag, function(){
                globalMessages.addSuccess("The tag '"+tag.name+"' has been remover.")
            });
        }
    }]);