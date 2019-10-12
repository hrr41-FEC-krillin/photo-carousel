const db = require('./index.js');


const randomNumber = (maxInt) => {
  return Math.floor(Math.random() * maxInt)
}

const movieIds = ['Detective Pikachu', 'Lion King', 'Frozen', 'Brave', 'The Rescuers', 'Sleeping Beauty', 'Robin Hood', 'Shrek', 'Lego Batman', 'Hercules', 'Mulan']

const generateDataArray = (entries) => {
  const fakeData = [];
  for (let i = 0; i < entries; i++) {
    let imgUrl = randomNumber(21);
    let movieInt = randomNumber(12);
    let fakeImageData = {
      _id: 3131 + i,
      small_url:`https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/small${imgUrl}.jpg`,
      large_url:`https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/large${imgUrl}.jpg`,
      movie: {
        id: 2121 + movieInt,
        title: movieIds[movieInt]
      }
    }
    fakeData.push(fakeImageData);
  }

  return fakeData;
}


db.save(generateDataArray(100), console.log);
