import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.setState({currentFour: this.state.carousel.slice(0, 4)})
    })
  }

  //currently hardcoded to get specific movie
  componentDidMount() {
    this.fetch('imgsmall', 21215);
  }

  //will add dynamic navigation bar in future pull request
  // @ symbols will be replaced with arrow images
  render() {
    return (
      <div className="carousel-body">
        <div className="carousel-header">
          <div className="carousel-header-color">
            <div className="carousel-title">(Movie Name) PHOTOS</div>
          </div>
          <div className="carousel-navbar">
            navigation bar here
          </div>
        </div>
        <div className="carousel-bin">
          <button className="carousel-left"> @ </button>
          <Carousel carousel={this.state.currentFour} />
          <button className="carousel-right"> @ </button>
        </div>
        <div className="carousel-viewAll">
          <a href="http://www.google.com">View All Photos ({this.state.carousel.length})</a>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('imgcarousel'));
