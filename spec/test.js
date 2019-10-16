const app = require('../server/app.js');
const request = require('supertest');


describe('server responses', () => {

  test('should respond with status 200 for movies in db', async () => {
    for (let i = 0; i < 12; i++) {
      let movieId = '2121' + i.toString();
      let data = await request(app).get('/api/imgsmall/' + movieId);

      expect(data.statusCode).toBe(200);
    }
  });

  test('should respond with an array length 1 - 25', async () => {
    for (let i = 0; i < 12; i++) {
      let movieId = '2121' + i.toString();
      let data = await request(app).get('/api/imgsmall/' + movieId);

      expect(Array.isArray(data.body)).toBeTruthy();
      expect(data.body.length).toBeGreaterThanOrEqual(1);
      expect(data.body.length).toBeLessThanOrEqual(25);
    }
  });

  test('should respond with status 200 for movies in db', async () => {
    for (let i = 0; i < 12; i++) {
      let movieId = '2121' + i.toString();
      let data = await request(app).get('/api/imglarge/' + movieId);

      expect(data.statusCode).toBe(200);
    }
  });

  test('should respond with an array length 1 - 25', async () => {
    for (let i = 0; i < 12; i++) {
      let movieId = '2121' + i.toString();
      let data = await request(app).get('/api/imglarge/' + movieId);

      expect(Array.isArray(data.body)).toBeTruthy();
      expect(data.body.length).toBeGreaterThanOrEqual(1);
      expect(data.body.length).toBeLessThanOrEqual(20);
    }
  });

  test('routes should return the same length array', async () => {
    for (let i = 0; i < 12; i++) {
      let movieId = '2121' + i.toString();
      let data = await request(app).get('/api/imgsmall/' + movieId);
      let dataTwo = await request(app).get('/api/imglarge/' + movieId);

      expect(data.body.length).toEqual(dataTwo.body.length);
    }
  });

});



