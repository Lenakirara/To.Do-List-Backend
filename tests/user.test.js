const chai = require('chai')
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../src/api/app');
const { MongoClient } = require('mongodb');
const getConnection = require('./connectionMock');
const { expect } = require('chai');

chai.use(chaiHttp);

describe('Creating a new user', () => {
  let connectionMock;
  let response;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Return error when registering without "name"', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          email: 'email@email.com',
          password: '123456',
        });
    });

    it('Returns status code 400', () => {
      expect(response.status).to.be.equal(400);
    });
    it('Returns an error message', () => {
      expect(response.body.message).to.be.equal('Invalid Values');
    });
    it('Returns an object', () => {
      expect(response.body).to.be.an('object');
    });
    it('returns "message" property', () => {
      expect(response.body).to.have.property('message');
    });
  });
  describe('Return error when registering without "email"', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'username',
          password: '123456',
        });
    });
    it('Returns status code 400', () => {
      expect(response.status).to.be.equal(400);
    });
    it('Returns an error message', () => {
      expect(response.body.message).to.be.equal('Invalid Values');
    });
    it('Returns an object', () => {
      expect(response.body).to.be.an('object');
    });
    it('returns "message" property', () => {
      expect(response.body).to.have.property('message');
    });
  });

  describe('Return error when registering without "password"', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'username',
          email: 'email@email.com',
        });
    });

    it('Returns status code 400', () => {
      expect(response.status).to.be.equal(400);
    });
    it('Returns an error message', () => {
      expect(response.body.message).to.be.equal('Invalid Values');
    });
    it('Returns an object', () => {
      expect(response.body).to.be.an('object');
    });
    it('returns "message" property', () => {
      expect(response.body).to.have.property('message');
    });
  });
});
