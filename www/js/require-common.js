/* Allows to have common dependencies in "main" and "test-main" */
define([], function() {
  return {
    paths: {
      'require-text': 'lib/requirejs-text/text',
      'ngload': 'lib/angularAMD/ngload',
      'ionic': 'lib/ionic/js/ionic',
      'cordova': 'cordova',
      
      'angular': 'lib/angular/angular',
      'angularAMD': 'lib/angularAMD/angularAMD',
      'angular-ionic': 'lib/ionic/js/ionic-angular',
      'angular-cordova': 'lib/angular-cordova/src/angular-cordova',
      'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router',
      'angular-animate': 'lib/angular-animate/angular-animate',
      'angular-sanitize': 'lib/angular-sanitize/angular-sanitize',

      /* I chose to declare each Controller/Service/Directive here, 
         so I don't need to use path when requiring them in app and tests. */
      // Controllers
      'HomeCtrl': 'js/controllers/home.ctrl',
      'PlaylistsCtrl': 'js/controllers/playlists.ctrl',
      'PlaylistCtrl': 'js/controllers/playlist.ctrl',

      /* Templates : You can centralize your templates URL here. 
      Template will be loaded with components using it. */
      'loginTpl': 'templates/login.html',

      // Module declaration and Bootstrap
      'app': 'js/app',
    },
    shim: {
      'angular': {
        exports: 'angular',
        deps: ['require-text']
      },
      'angularAMD': ['angular'],
      'ngload': ['angularAMD'],
      'angular-resource': ['angular'],
      'angular-ui-router': ['angular'],
      'angular-animate': ['angular'],
      'angular-sanitize': ['angular'],
      'angular-ionic': {
        deps: ['angular', 'ionic'],
        exports: 'ionic'
      },
      'angular-cordova': ['angular'],
      'ionic': {
        exports: 'ionic'
      }
    }
  };
});