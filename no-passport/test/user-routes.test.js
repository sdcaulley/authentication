const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } =require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('user routes', () => {
  console.log('server: ', server);
  after(() => {
    server.close();
  });

  it('should GET home', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).equal('Hello World');
        done();
      });
  });
});
