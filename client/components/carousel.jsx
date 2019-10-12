import React from 'react';
import CarouselEntry from './carouselEntry.jsx';


const Carousel = (props) => (
  <div className="carousel-line">
    {props.carousel.map(entry =>
      <CarouselEntry entry={entry} />
    )}
  </div>
)


export default Carousel;
