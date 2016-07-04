/**
 * Policy Mappings
 */
module.exports.policies = {
  '*': 'isAuthenticated',
  'AuthController' :{
   'login': true,
   'logout' : true,
  },
  'UserController' :{
   'register': true,
  },
};
