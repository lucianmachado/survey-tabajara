var should = require('should');
var request = require('superagent');

describe("User test", function() {
  it("Deve registrar um usuário com sucesso", function(done) {
    request.post(sails.config.sails_url() + "/register")
      .send({
        name: 'Manny',
        email: 'many@gmail.com',
        password: 'test123123'
      })
      .end(function(err, res) {
        res.statusCode.should.match(201);
        done();
      });
  });

  it("Não deve registrar um usuário duplicado", function(done) {
    request.post(sails.config.sails_url() + "/register")
      .send({
        name: 'Manny',
        email: 'many@gmail.com',
        password: 'test123123'
      })
      .end(function(err, res) {
        res.statusCode.should.match(500);
        done();
      });
  });

  it("Deve efetuar login com usuario criado", function(done) {
    request.post(sails.config.sails_url() + "/login")
      .send({
        name: 'Manny',
        email: 'many@gmail.com',
        password: 'test123123'
      })
      .end(function(err, res) {
        res.statusCode.should.match(200);
        done();
      });
  });

  it("Deve efetuar logout com usuario criado", function(done) {
    request.get(sails.config.sails_url() + "/logout")
      .send()
      .end(function(err, res) {
        res.statusCode.should.match(200);
        done();
      });
  });

  it("Não deve conseguir efetuar login com usuario e senha inexistentes", function(done) {

    request.post(sails.config.sails_url() + "/login")
      .send({
        email: 'aaa@gmail.com',
        password: 'aaaaaa'
      })
      .end(function(err, res) {
        res.res.body.user.should.match(false);
        done();
      });
  });
});
