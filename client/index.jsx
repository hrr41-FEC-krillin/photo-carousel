import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
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
        <Carousel carousel={this.state.carousel} />
        <div className="carousel-viewAll">
          <a href="http://www.google.com">View All Photos ({this.state.carousel.length})</a>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('imgcarousel'));
