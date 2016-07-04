var should = require('should');
var request = require('superagent');

describe("Restaurant test", function() {
  it("Não deve conseguir criar um restaurante sem autorização", function(done) {
    request.post(sails.config.sails_url() + "/restaurants")
      .send({
        name: 'Esquinas lanches',
      })
      .end(function(err, res) {
        res.statusCode.should.match(401);
        done();
      });
  });
});
