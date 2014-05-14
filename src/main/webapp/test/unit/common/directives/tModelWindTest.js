describe('t-model-wind', function(){
    var elm, scope;

    beforeEach(module('commonDirectives'));
    beforeEach(module('src/common/directives/tModelWind.html'));

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope;
        elm = angular.element('<t-modal-wind title="Modal wind title" is-show="isShow">' +
                                '<div>modal wind content</div>' +
                              '</t-modal-wind>');
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should put transcluded html to modal body', function(){
        var modalBody = $(elm).find('.modal-body');
        expect(modalBody.find('div').html()).toBe('modal wind content');

        var modalTitle = $(elm).find('.modal-title');
        expect(modalTitle.html()).toBe('Modal wind title');
    });
    it('should set false to isShow after close window', function(){
        //given
        scope.$apply(function(){
            scope.isShow = true;
        });

        //when
        $(elm).trigger($.Event('hidden.bs.modal'));

        //then
        expect(scope.isShow).toBeFalsy();
    });
    it('should show window when showEvent in scope is "true"', function(){
        //given
        var showEvent;
        $(elm).on('show.bs.modal', function(e){
            showEvent = e;
        });

        //when
        scope.$apply(function(){
            scope.isShow = true;
        });

        //then
        expect(showEvent).toBeTruthy();
    });
    it('should not show window when showEvent in scope is "false"', function(){
        //given
        var showEvent;
        $(elm).on('show.bs.modal', function(e){
            showEvent = e;
        });

        //when
        scope.$apply(function(){
            scope.isShow = false;
        });

        //then
        expect(showEvent).toBeFalsy();
    });



});