describe('empty', function () {
    var elm, elmWithParent, scope;

    beforeEach(module('directives'));

    beforeEach(module('src/empty.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope;
        scope.object = [];
        scope.parent = {};

        elm = angular.element('<div empty object="object" message="mmm"></div>');
        $compile(elm)(scope);
        scope.$digest();

        elmWithParent = angular.element('<div empty parent="parent" object="object" message="mmm"></div>');
        $compile(elmWithParent)(scope);
        scope.$digest();
    }));

    it('should hide alert when object is empty and not resolved yet', function () {
        scope.$apply(function(){
            scope.object.$resolved = false;
        });

        var alert = $(elm).find('.alert');
        expect(alert.eq(0)).toHaveClass('ng-hide');
    });
    it('should show alert when object is empty and already resolved', function () {
        scope.$apply(function(){
            scope.object.$resolved = true;
        });

        var alert = $(elm).find('.alert');
        expect(alert.eq(0)).not.toHaveClass('ng-hide');
    });
    it('should show alert when object is empty and it don\'t have $resolver state', function () {
        scope.$apply(function(){
            scope.object.$resolved = true;
        });

        var alert = $(elm).find('.alert');
        expect(alert.eq(0)).not.toHaveClass('ng-hide');
    });
    it('should hide alert when object is empty and parent not resolved yet', function () {
        scope.$apply(function(){
            scope.parent.$resolved = false;
        });

        var alert = $(elmWithParent).find('.alert');
        expect(alert.eq(0)).toHaveClass('ng-hide');
    });
    it('should show alert when object is empty and parent already resolved', function () {
        scope.$apply(function(){
            scope.parent.$resolved = true;
        });

        var alert = $(elmWithParent).find('.alert');
        expect(alert.eq(0)).not.toHaveClass('ng-hide');
    });

});

describe('directives', function () {
    beforeEach(module('directives'));
    beforeEach(module('src/myDir.html'));

    describe('my-dir', function () {
        it('should print current version', function () {
            inject(['$compile', '$rootScope', function ($compile, $rootScope) {
                var scope = $rootScope;
                var element = $compile('<div my-dir></div>')(scope);
                scope.$digest();
            }]);
        });
    });
});












































describe('tabs', function () {
    var elm, scope;

    // load the tabs code
    beforeEach(module('tabs'));

    // load the templates
//    beforeEach(module('src/tabs.html', 'src/pane.html'));
    beforeEach(module('src/tabs.html', 'src/pane.html'));

    beforeEach(inject(function ($rootScope, $compile) {
        // we might move this tpl into an html file as well...
        elm = angular.element(
            '<div>' +
                '<tabs>' +
                '</tabs>' +
                '</div>');

        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();

//        console.log(elm.html());
    }));


    it('should create clickable titles', inject(function ($compile, $rootScope) {
//        var e = elm.find('ul');
//        console.log('~~~~~~~~~~~~');
//        console.log(elm.find('div'));

        var titles = $(elm).find('ul.nav-tabs li a');

//        expect(titles.length).toBe(2);
//        expect(titles.eq(0).text()).toBe('First Tab');
//        expect(titles.eq(1).text()).toBe('Second Tab');
    }));


//    it('should bind the content', function() {
//        var contents = elm.find('div.tab-content div.tab-pane');
//
//        expect(contents.length).toBe(2);
//        expect(contents.eq(0).text()).toBe('first content is ');
//        expect(contents.eq(1).text()).toBe('second content is ');
//
//        scope.$apply(function() {
//            scope.first = 123;
//            scope.second = 456;
//        });
//
//        expect(contents.eq(0).text()).toBe('first content is 123');
//        expect(contents.eq(1).text()).toBe('second content is 456');
//    });
//
//
//    it('should set active class on title', function() {
//        var titles = elm.find('ul.nav-tabs li');
//
//        expect(titles.eq(0)).toHaveClass('active');
//        expect(titles.eq(1)).not.toHaveClass('active');
//    });
//
//
//    it('should set active class on content', function() {
//        var contents = elm.find('div.tab-content div.tab-pane');
//
//        expect(contents.eq(0)).toHaveClass('active');
//        expect(contents.eq(1)).not.toHaveClass('active');
//    });
//
//
//    it('should change active pane when title clicked', function() {
//        var titles = elm.find('ul.nav-tabs li');
//        var contents = elm.find('div.tab-content div.tab-pane');
//
//        // click the second tab
//        titles.eq(1).find('a').click();
//
//        // second title should be active
//        expect(titles.eq(0)).not.toHaveClass('active');
//        expect(titles.eq(1)).toHaveClass('active');
//
//        // second content should be active
//        expect(contents.eq(0)).not.toHaveClass('active');
//        expect(contents.eq(1)).toHaveClass('active');
//    });
});
