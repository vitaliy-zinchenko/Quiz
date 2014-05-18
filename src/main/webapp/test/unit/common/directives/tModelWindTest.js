describe('t-model-wind', function(){
    var elm, scope;

    beforeEach(module('commonDirectives'));
    beforeEach(module('src/common/directives/qModalWind.html'));

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope;
        elm = angular.element('<t-modal-wind title="Modal wind title" is-show="isShow"' +
                                    'ok-click="okClick()" cancel-click="cancelClick()">' +
                                '<div>modal wind content</div>' +
                              '</t-modal-wind>');
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should call ok an cancel callback when click on these buttons', function(){
        var okClickHandled = false;
        var cancelClickHandled = false;
        scope.$apply(function(){
            scope.okClick = function(){
                okClickHandled = true;
            }
            scope.cancelClick = function(){
                cancelClickHandled = true;
            }
        });

        var okButton = $(elm).find('[ng-click="okClick()"]');
        okButton.click();
        expect(okClickHandled).toBeTruthy();

        var cancelButton = $(elm).find('[ng-click="cancelClick()"]');
        cancelButton.click();
        expect(cancelClickHandled).toBeTruthy();
    });

    it('should print default labels for buttons', function(){
        var okButton = $(elm).find('[ng-click="okClick()"]');
        expect(okButton.html()).toBe('OK');

        var cancelButton = $(elm).find('[ng-click="cancelClick()"]');
        expect(cancelButton.html()).toBe('Cancel');
    });

    it('should print custom labels for buttons', inject(function($compile){
        elm = angular.element('<t-modal-wind is-show="isShow" ok-label="Custom OK" cancel-label="Custom Cancel">' +
            '<div>modal wind content</div>' +
            '</t-modal-wind>');
        $compile(elm)(scope);
        scope.$digest();

        var okButton = $(elm).find('[ng-click="okClick()"]');
        expect(okButton.html()).toBe('Custom OK');

        var cancelButton = $(elm).find('[ng-click="cancelClick()"]');
        expect(cancelButton.html()).toBe('Custom Cancel');
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