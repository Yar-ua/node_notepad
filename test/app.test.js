//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Routing test', () => {

/*
  * Test the /GET route
  */
  describe('/GET ', () => {
      it('it should GET start page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
              res.should.have.status(200);
              // res.body.should.have.a('<title>Express</title>');
              expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]); 
                  // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});
