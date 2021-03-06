var app = angular.module('app', ['ngRoute',
    'controllers', 'adminkaControllers', 'service']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    /**
     * ~~~~~ QUIZ ~~~~~
     */
        .when('/login', {
            templateUrl: 'app/js/quiz/controllers/login.html',
            controller: 'LoginCtrl'
        })
        .when('/list', {
            templateUrl: 'app/js/quiz/controllers/list.html',
            controller: 'ListCtrl'
        })
        .when('/test/:testId', {
            templateUrl: 'app/js/quiz/controllers/test.html',
            controller: 'TestCtrl'
        })
        .when('/category/:categoryId', {
            templateUrl: 'app/js/quiz/controllers/list.html',
            controller: 'CategoryCtrl'
        })
        .when('/create/category', {
            templateUrl: 'app/js/quiz/controllers/createCategory.html',
            controller: 'CreateCategoryCtrl'
        })
        .when('/category/:categoryId/update', {
            templateUrl: 'app/js/quiz/controllers/createCategory.html',
            controller: 'CreateCategoryCtrl'
        })
        .when('/create/category/:categoryId', {
            templateUrl: 'app/js/quiz/controllers/createCategory.html',
            controller: 'CreateCategoryCtrl'
        })
        .when('/createTest/:categoryId', {
            templateUrl: 'app/js/quiz/controllers/createTest.html',
            controller: 'CreateTestCtrl'
        })
        .when('/test/:testId/update', {
            templateUrl: 'app/js/quiz/controllers/createTest.html',
            controller: 'UpdateTestCtrl'
        })
    /**
     * ~~~~~ ADMINKA ~~~~~
     */
        .when('/adminka', {
            templateUrl: 'app/js/adminka/controllers/main.html',
            controller: 'AdminkaMainCtrl'
        })
        .when('/adminka/images', {
            templateUrl: 'app/js/adminka/controllers/images.html',
            controller: 'AdminkaImagesCtrl'
        })
        .when('/adminka/users', {
            templateUrl: 'app/js/adminka/controllers/users.html',
            controller: 'AdminkaUsersCtrl'
        })
        .when('/adminka/tags', {
            templateUrl: 'app/js/adminka/controllers/tags.html',
            controller: 'AdminkaTagsCtrl'
        })

    /**
     *  OTHER
     */
        .otherwise({
            redirectTo: '/list'
        });

}]);

app.run(['$rootScope', 'Config', 'Logout', '$location',
    function ($rootScope, Config, Logout, $location) {
        //TODO !!!!!!!!!!!!!!!!!!
        $rootScope.config = Config.load();

        //TODO | remove
        globalConfig = $rootScope.config;

        $rootScope.logout = function(){
            Logout.logout(function(){
                Config.cleanUser();
                console.log('logout');
            });
        };
        //TODO | refactor to directive
        $rootScope.hasPermiss = function(permission){
            if(!this.config.user)
                return false;
            var permissions = this.config.user.role.permissions;
            for (var i = 0; i < permissions.length; i++) {
                if(permissions[i].permission == permission)
                    return true;
            }
            return false;
        };
        $rootScope.isAuth = function(){
            if(this.config.user) return true;
            else return false;
        }
    }]);

app.service('globalMessageService', [function () {
    var messages = [];
    var updateListener;
    return {
        setUpdateListener: function (listener) {
            updateListener = listener;
        },
        /**
         *
         * @param type can be: 'danger', 'success', 'info', 'warning'
         * @param text
         */
        addMessage: function (type, text) {
            var message = {
                text: text,
                type: type
            }
            messages.push(message);
            updateListener(messages);
            setTimeout(function () {
                messages.splice(messages.indexOf(message), 1);
                updateListener(messages);
            }, 4000);
        },
        addDanger: function (message) {
            this.addMessage('danger', message)
        },
        addSuccess: function (message) {
            this.addMessage('success', message)
        },
        addInfo: function (message) {
            this.addMessage('info', message)
        },
        addWarning: function (message) {
            this.addMessage('warning', message)
        },
        getMessages: function () {
            return messages;
        },
        removeMessage: function (message) {
            messages.splice(messages.indexOf(message), 1);
        }
    }
}]);
