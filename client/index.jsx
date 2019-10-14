import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navigation from './components/navigation.jsx';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: '',
      carousel: [],
      carouselByFours: [],
      currentFour: []
    }

    this.fetch = this.fetch.bind(this);
    this.groupImagesByFours = this.groupImagesByFours.bind(this);
  }

  //this function breaks the images into an array of arrays
    // inner arrays have four images each in them
    // if movie has < 4 images total then add in 'blank' image as placeholder
  groupImagesByFours(carousel) {
    var count = carousel.length / 4;
    var selectedFour = [];
    var allGroupsOfFour = [];
    var genericImage= {"_id": "placeholder",
      "small_url": "https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/ph-thumb.gif"};

    if (carousel.length < 4) {
      selectedFour = carousel.slice();
      while (selectedFour.length < 4) {
        selectedFour.push(genericImage);
      }
      allGroupsOfFour.push(selectedFour);
    }

    var i = 0;
    while (i < count) {
      selectedFour = carousel.slice(i, i + 4);
      if (selectedFour.length < 4) {
        selectedFour = carousel.slice(-4);
      }
      allGroupsOfFour.push(selectedFour);
      i++;
    }

    this.setState({carouselByFours: allGroupsOfFour});
    this.setState({currentFour: this.state.carouselByFours[0]});
  }

  fetch(url, params) {
    axios.get(`/api/${url}/${params}`)
    .then(response => {
      console.log(response);
      this.setState({carousel: response.data})
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      this.setState({currentMovie: this.state.carousel[0].movie.title});
      this.groupImagesByFours(this.state.carousel);
    })
  }

  //currently hardcoded to get specific movie
  componentDidMount() {
    this.fetch('imgsmall', 21210);
  }

  //will add dynamic navigation bar in future pull request
  render() {
    return (
      <div className="carousel-body">
        <div className="carousel-header">
          <div className="carousel-header-color">
            <div className="carousel-title">{this.state.currentMovie} PHOTOS</div>
          </div>
          <div className="carousel-navbar">
            <Navigation total={this.state.carouselByFours} />
          </div>
        </div>
        <div className="carousel-bin">
          <button className="carousel-left"> {'<'} </button>
          <Carousel carousel={this.state.currentFour} />
          <button className="carousel-right"> {'>'} </button>
        </div>
        <div className="carousel-viewAll">
          <a href="http://www.google.com">View All Photos ({this.state.carousel.length})</a>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('imgcarousel'));
