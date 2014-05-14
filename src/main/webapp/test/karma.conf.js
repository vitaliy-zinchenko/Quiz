module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/bootstrap/js/modal.js',
//            'app/bower_components/jasmine/lib/jasmine-core/jasmine.js',
//            'app/bower_components/jasmine/lib/jasmine-core/jasmine-html.js',
//            'app/bower_components/jasmine/lib/jasmine-core/boot/boot.js',
//            'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
            'src/**/*.js',
            'test/unit/**/*.js',

//            '',
            'src/**/*.html'
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
            'src/**/*.html': 'ng-html2js'
        }

    });
};
