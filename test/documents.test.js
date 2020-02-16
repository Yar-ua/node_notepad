process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
let assert = require('chai').assert;


chai.use(chaiHttp);

describe('Documents routing test', () => {

/*
  * Test the /POST route for creating documents
  */
  describe('POST /documents ', () => {
      it('it should POST request and create a new document', (done) => {
        chai.request(app)
            .post('/documents')
            .set('Content-Type', 'application/json')
            .send({
              "document": {
                "title": "Test",
                "data": "20.02.2020",
                "tags": "test"
              }
            })
            .end((err, res) => {
              res.body.should.exist;
              assert.equal(res.status, 200);
              assert.equal(res.body.title, "Test");
              assert.equal(res.body.data, "20.02.2020");
              assert.equal(res.body.tags, "test");
              done();
            });
      });
  });


/*
  * Test the /GET route for index documents page
  */
  describe('GET /documents ', () => {
      it('it should GET all documents on index page', (done) => {
        chai.request(app)
            .get('/documents')
            .end((err, res) => {
              res.body.should.exist;
              assert.equal(res.status, 200);
              done();
            });
      });
  });

});
