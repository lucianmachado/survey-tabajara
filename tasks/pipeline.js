// CSS files to inject in order
var cssFilesToInject = [
  'vendor/Materialize/dist/css/materialize.min.css',
  'styles/**/*.css'
];

// Client-side javascript files to inject in order
var jsFilesToInject = [
  'vendor/jquery/dist/jquery.min.js',
  'vendor/Materialize/dist/js/materialize.min.js',
  'vendor/angular/angular.min.js',
  'vendor/lodash/dist/lodash.min.js',
  'vendor/restangular/dist/restangular.min.js',
  'vendor/angular-ui-router/release/angular-ui-router.min.js',
  'vendor/ngstorage/ngStorage.min.js',
  'vendor/moment/min/moment.min.js',
  'app/app.js',
  'app/**/*.js'
];

// Client-side HTML templates
var templateFilesToInject = [
  'templates/**/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
