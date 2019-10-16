//const database = require('../database/index.js');
//const mongoose = require('mongoose');
const app = require('../server/app.js');
const request = require('supertest');


describe('server communication with database', () => {
  let serverTest;

  beforeEach(async (done) => {
    serverTest = await request(app).get('/api/imgsmall/21210');

    done();
  });


  test('should respond with 200', () => {
    expect(serverTest.statusCode).toBe(200);
  });

});


// describe('database', () => {
//   let server;

//   beforeAll(async (done) => {
//     await mongoose.connect('mongodb://localhost/test');
//     server = app.listen(3100, () => {
//       global.agent = request.agent(server);
//       done();
//     });
//   });

//   afterAll(async () => {
//     await server.close();
//     await mongoose.disconnect();
//   });

// });

