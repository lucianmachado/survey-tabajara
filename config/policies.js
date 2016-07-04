/**
 * Policy Mappings
 */
module.exports.policies = {
  '*': 'isAuthenticated',
  'AuthController' :{
   'login': true,
  },
  'UserController' :{
   'register': true,
  },
};
