var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function(err) {
        if (err) res.send({
          error: err.message
        }, 500);

        req.session.authenticated = true;

        res.send({
          message: "Success!",
          code : 200,
          user,
        });
      });

    })(req, res);
  },

  logout: function(req, res) {
    req.session.authenticated = false;
    req.logout();
    res.status().send({message : 'ciao'},200);
  }
};
