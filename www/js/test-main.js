require(['/base/www/js/require-common.js'], function(common) {
/* Tells Karma to use only .mocha.js files as test files */
  var tests = [];
  for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
      if (/.*\.mocha\.js$/i.test(file)) {
          tests.push(file);
      }
    }
  }

  require.config({
    baseUrl: '/base/www',
    paths: common.paths,
    shim: common.shim,
  
    deps: tests,
    callback: window.__karma__.start
  });

});