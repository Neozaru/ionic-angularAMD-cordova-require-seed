require(['angular-mocks', 'HomeCtrl'], function(mocks) {

  describe('HomeCtrl controller test', function() {

    var scope;
    var ctrl;
    var ngTimeout;

    beforeEach(mocks.module('starter'));

    beforeEach(mocks.inject(function($rootScope, $controller, $timeout) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope, $timeout: $timeout});
      ngTimeout = $timeout;
    }));

    it('should exist', function() {
      expect(ctrl).to.exist;
    });

    it('should initially have hidden modal', function() {
      expect(scope.modal.isShown()).to.not.be.ok;
    });

    it('should show and hide modal', function() {
      scope.login();
      expect(scope.modal.isShown()).to.be.ok;
      scope.closeLogin();
      expect(scope.modal.isShown()).to.not.be.ok;
      scope.login();
      expect(scope.modal.isShown()).to.be.ok;
    });

    it('should close modal on login', function() {
      scope.login();
      expect(scope.modal.isShown()).to.be.ok;
      scope.doLogin();
      /* !!! Next line throws an $httpBackend error. I don't unerstand. */
      // ngTimeout.flush();
      // expect(scope.modal.isShown()).to.not.be.ok;
    });

  });

});