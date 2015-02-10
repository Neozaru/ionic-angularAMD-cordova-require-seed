define(['angular-mocks', 'PlaylistsCtrl'], function(mocks) {

  describe('PlaylistsCtrl controller test', function() {

    var scope;
    var ctrl;

    beforeEach(mocks.module('starter'));

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('PlaylistsCtrl', {$scope: scope});
    }));

    it('should exist', function() {
      expect(ctrl).to.exist;
    });

    it('should initially contain 6 playlists', function() {
      expect(scope.playlists).to.have.length(6);
    });

  });

});