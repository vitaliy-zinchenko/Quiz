module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/bootstrap/js/modal.js',
            'app/js/**/*.js',
            'test/unit/**/*.js',
            'app/js/**/*.html'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        preprocessors: {
            'app/js/**/*.html': 'ng-html2js'
        }

    });
};
