require(['require-common'], function(common) {
  require.config({
    baseUrl: '/',
    paths: common.paths,
    shim: common.shim,
    deps: ['app']
  });


  require( [
    'cordova',
    'ionic',
    'angularAMD'], function(cordova, ionic, angularAMD) {
    'use strict';

    var start = function() {
        require(['app'], function(app) {
        });
    };

    var onDeviceReady = function () {
        start()
    };

    document.addEventListener("deviceready", onDeviceReady, false);

    if (typeof cordova === 'undefined') {
        /* Still useful ? */
        angular.element().ready(function () {
            try {
                start()
            } catch (e) {
                console.error(e.stack || e.message || e);
            }
        });
    }

    });
});