describe('t-loading', function(){
    var scope, elm;

    beforeEach(module('commonDirectives'));
    beforeEach(module('app/js/common/directives/qLoading.html'));

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope;
        elm = angular.element('<q-loading object="categories"></q-loading>');
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should not show object when object is undefined', function(){
        console.log(elm);
    })


});