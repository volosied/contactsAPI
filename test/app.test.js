//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let expect = chai.expect;

chai.use(chaiHttp);

describe("Testing Contacts API!", () => {
  it("/GET Contacts", done => {
    chai
      .request(server)
      .get("/api/contacts")
      .end((err, res) => {
        expect(res).to.have.status(200);
        //console.log(res.body);
        done();
      });
  });
});
