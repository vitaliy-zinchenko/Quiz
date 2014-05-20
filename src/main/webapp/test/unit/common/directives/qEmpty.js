describe('q-empty', function () {
    var elm, elmWithParent, scope;

    beforeEach(module('commonDirectives'));

    beforeEach(module('app/js/common/directives/qEmpty.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope;
        scope.object = [];
        scope.parent = {};

        elm = angular.element('<q-empty object="object">message</q-empty>');
        $compile(elm)(scope);
        scope.$digest();

        elmWithParent = angular.element('<q-empty parent="parent" object="object">message</q-empty>');
        $compile(elmWithParent)(scope);
        scope.$digest();
    }));

    it('should put message', function(){
        expect(elm.find('span').html()).toBe('message');
    });

    it('should show alert when object is undefined', function () {
        scope.$apply(function(){
            scope.object = undefined;
        });

        expect(elm.eq(0)).not.toHaveClass('ng-hide');
    });
    it('should show alert when object is null', function () {
        scope.$apply(function(){
            scope.object = null;
        });

        expect(elm.eq(0)).not.toHaveClass('ng-hide');
    });
    it('should hide alert when object is empty and not resolved yet', function () {
        scope.$apply(function(){
            scope.object.$resolved = false;
        });

        expect(elm.eq(0)).toHaveClass('ng-hide');
    });
    it('should show alert when object is empty and already resolved', function () {
        scope.$apply(function(){
            scope.object.$resolved = true;
        });

        expect(elm.eq(0)).not.toHaveClass('ng-hide');
    });
    it('should show alert when object is empty and it don\'t have $resolver state', function () {
        scope.$apply(function(){
            scope.object.$resolved = true;
        });

        expect(elm.eq(0)).not.toHaveClass('ng-hide');
    });
    it('should hide alert when object is undefined and parent not resolved yet', function () {
        scope.$apply(function(){
            scope.parent.$resolved = false;
            scope.object = undefined;
        });

        expect(elmWithParent.eq(0)).toHaveClass('ng-hide');
    });
    it('should show alert when object is undefined and parent already resolved', function () {
        scope.$apply(function(){
            scope.parent.$resolved = true;
            scope.object = undefined;
        });

        expect(elmWithParent.eq(0)).not.toHaveClass('ng-hide');
    });

    it('should show alert when object is empty', function () {
        scope.$apply(function(){
            scope.object = [];
        });

        expect(elmWithParent.eq(0)).not.toHaveClass('ng-hide');
    });

});