angular.module('service', ['ngResource', 'angularFileUpload'])
    .factory('Category', function ($resource) {
        var Category = $resource('api/categories/:id');


        return Category;
    })
    .factory('Test', function ($resource) {
        var Test = $resource('api/test/:id', {},
            {update: { method: 'PUT' }});


        return Test;
    })
    .factory('Tag', function ($resource) {
        var Tag = $resource('api/tag/:id', {}, {
            _delete: {method: 'DELETE'},
            _create: {method: 'POST'},
            _update: {method: 'PUT'}
        });

        var tags;

        Tag.getAll = function () {
            if (tags) return tags;
            tags = Tag.query();
            return tags;
        }

        Tag.delete = function (tag, success, error) {
            Tag._delete({id: tag.id}, function () {
                tags.splice(tags.indexOf(tag), 1);
                if (success) success();
            }, error);
        }

        Tag.create = function (tag, success, error) {
            Tag._create(tag, function (data) {
                tags.push(data);
                if (success) success();
            }, error);
        }

        Tag.update = function (tag, success, error) {
            Tag._update(tag, function () {

                if (success) success();
            }, error);
        }

        return Tag;
    })
    .factory('Image', ['$resource', '$upload', function ($resource, $upload) {
        var Image = $resource('api/image/:id', {}, {
            delete: {method: 'DELETE', params: {id: 'id'}}
        });

        Image.save = function (image, success, error) {
            $upload.upload({
                url: 'api/image',
                method: 'POST',
                data: image
            }).success(function (data) {
                    angular.extend(image, data);
                    image.edit = false;
                    delete image.old;
                    if (success) success();
                }).error(function () {
                    if(error) error();
                });

        }

        return Image;
    }])
    .factory('Config', function ($resource) {
        var Config = $resource('api/config/clientSide');
        //TODO | need to do synchronosly and cash
        Config.load = function () {
            //TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            return Config.get();
        };
        Config.getAdminkaMenuItems = function () {
            return [
                {
                    key: 'toSite',
                    name: 'To Site',
                    description: 'Go to site to see your changes.',
                    url: '/',
                    icon: 'toSite.jpg'
                },
                {
                    key: 'images',
                    name: 'Images Config',
                    description: 'You can change, add, remove images there.',
                    url: '/adminka/images',
                    icon: 'images.jpg'
                },
                {
                    key: 'users',
                    name: 'Users',
                    description: 'You can edit, add, remove users there.',
                    url: '/adminka/users',
                    icon: 'users.jpg'
                },
                {
                    key: 'tags',
                    name: 'Tags',
                    description: 'You can edit, add, remove tags there.',
                    url: '/adminka/tags',
                    icon: 'tags.jpg'
                }
            ]
        }
        return Config;
    })
;