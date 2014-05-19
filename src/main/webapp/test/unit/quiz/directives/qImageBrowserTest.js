describe('q-image-browser', function () {
    var elm, scope;

    beforeEach(module('directives', 'commonDirectives', 'service'));
    beforeEach(module('app/js/quiz/directives/qImageBrowser.html'));
    beforeEach(module('app/js/common/directives/qModalWind.html'));

    beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
//           $httpBackend.whenGET('/api/url')
//            .respond([
//                {
//                    'imagesPath': '/app/fileStore/imagesStore',
//                    'adminkaIconsPath': '/app/img/icons'
//                }
//            ]);

//        $httpBackend.whenGET('/api/config/clientSide')
//            .respond([
//                {
//                    'imagesPath': '/app/fileStore/imagesStore',
//                    'adminkaIconsPath': '/app/img/icons'
//                }
//            ]);
        $httpBackend.when('GET', '/api/image')
            .respond([
                {
                    'id': '1',
                    'fileName': 'img_1.jpg'
                },
                {
                    'id': '2',
                    'fileName': 'img_2.jpg'
                }
            ]);

        elm = angular.element('<q-image-browser target="target"></q-image-browser>');
        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('s', inject(function ($httpBackend, $http, Image) {
//        var images = Image.query();
//        console.log(images);


//        $http.get('/api/url').success(function(){
//            console.log('sss');
//        });

//        var result = mockUserResource.getUser('test');

//        $httpBackend.flush();

//        expect(result[0].username).toEqual('test');

//        console.log(elm);
    }));


});