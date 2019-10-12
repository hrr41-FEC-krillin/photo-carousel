import React from 'react';
import CarouselEntry from './carouselEntry.jsx';


const Carousel = (props) => (
  <div>
    {props.carousel.map(entry =>
      <CarouselEntry entry={entry} />
    )}
  </div>
)


export default Carousel;
