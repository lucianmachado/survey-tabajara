/**
 * Route Mappings
 */

module.exports.routes = {
  'post /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'post /register': 'UserController.register',
};
