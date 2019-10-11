const express = require('express');
const db = require('../database/index.js')

const app = express();
app.use(express.static('public'));


app.get('/api/imgt/:movieId', (req, res) => {
  db.getSmallCarousel(req.params.movieId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


app.get('/api/imgl/:movieId', (req, res) => {
  db.getLargeCarousel(req.params.movieId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


//set up for future deployment:
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3100;
}
app.listen(port, () => console.log(`App is listening on port ${port}`));
