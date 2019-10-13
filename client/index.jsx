import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    //state is currently hardcoded while setting up divs
    //will change this in next pull request
    this.state = {
      carousel: [{
        small_url: 'https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/small0.jpg'
      }, {
        small_url: 'https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/small1.jpg'
      }, {
        small_url: 'https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/small2.jpg'
      }, {
        small_url: 'https://hrr41-fec-krillin-imgs.s3-us-west-1.amazonaws.com/small3.jpg'
      }]
    }
  }

  componentDidMount() {
    //fetch function here
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
          <Carousel carousel={this.state.carousel} />
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
