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
      currentFour: []
    }

    this.fetch = this.fetch.bind(this);
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
      this.setState({currentFour: this.state.carousel.slice(0, 4),
      currentMovie: this.state.carousel[0].movie.title})
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
            <Navigation />
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
