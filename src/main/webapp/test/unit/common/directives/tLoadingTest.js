describe('t-loading', function(){
    var scope, elm;

    beforeEach(module('commonDirectives'));
    beforeEach(module('src/common/directives/tLoading.html'));

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope;
        elm = angular.element('<loading object="categories"></loading>');
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should not show object when object is undefined', function(){
        console.log(elm);
    })


});