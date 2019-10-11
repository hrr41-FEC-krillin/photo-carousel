const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel');


let carouselSchema = new mongoose.Schema({
  _id: Number,
  small_url: String,
  large_url: String,
  movie: {id: Number, title: String}
});

let Carousel = mongoose.model('Carousel', carouselSchema);


const save = (data, callback) => {
  for (let i = 0; i < data.length; i++) {
    let newImg = new Carousel ({
      _id: data[i]._id,
      small_url: data[i].small_url,
      large_url: data[i].large_url,
      movie: {id: data[i].movie.id, title: data[i].movie.title}
    })
    newImg.save((err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    });
  }
};

const getCarousel = (movieId, path, callback) => {
  var imageSize = undefined;

  path = path.slice(0, 10);
  if (path === '/api/imgl/') {
    imageSize = 'large_url'
  } else if (path === '/api/imgt/') {
    imageSize = 'small_url'
  }

  Carousel.find({'movie.id': movieId}, `${imageSize} movie`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}


module.exports.save = save;
module.exports.getCarousel = getCarousel;
