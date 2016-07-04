module.exports = function(req, res, next) {
  if (req.session.authenticated) {
    return next();
  }
  return res.send(401);
};
