define(['angular-mocks', 'PlaylistCtrl'], function(mocks) {

  describe('PlaylistCtrl controller test', function() {

    var scope;
    var ctrl;

    beforeEach(mocks.module('starter'));

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('PlaylistCtrl', {$scope: scope});
    }));

    it('should exist', function() {
      expect(ctrl).to.exist;
    });

  });

});