require('dotenv').config();
const mongoose = require('mongoose');

//set up for future deployment:
let mongo = process.env.MONGO;
if (mongo == null || mongo == "") {
  mongo = 'mongodb://localhost/carousel';
}

mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });


const carouselSchema = new mongoose.Schema({
  _id: Number,
  small_url: String,
  large_url: String,
  movie: {id: Number, title: String}
});

const Carousel = mongoose.model('Carousel', carouselSchema);


const save = (data, callback) => {
  for (let i = 0; i < data.length; i++) {
    let newImg = new Carousel ({
      _id: data[i]._id,
      small_url: data[i].small_url,
      large_url: data[i].large_url,
      movie: {id: data[i].movie.id, title: data[i].movie.title}
    });
    newImg.save((err, data) => callback(err, data));
  }
};

const getCarousel = (movieTitle, path, callback) => {
  let imageSize = undefined;

  if (path === '/api/imglarge/') {
    imageSize = 'large_url'
  } else if (path === '/api/imgsmall/') {
    imageSize = 'small_url'
  }
  Carousel.find({'movie.title': movieTitle}, `${imageSize} movie`, (err, results) => callback(err, results));
}


module.exports.save = save;
module.exports.getCarousel = getCarousel;
