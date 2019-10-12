import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: []
    }
  }

  componentDidMount() {
    //fetch function here
  }

  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('imgcarousel'));
