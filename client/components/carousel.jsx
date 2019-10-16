import React from 'react';
import CarouselEntry from './carouselEntry.jsx';
import { CarouselLineWrapper } from './stylesheet.jsx';


const Carousel = (props) => (
  <CarouselLineWrapper>
    {props.carousel.map(entry =>
      <CarouselEntry entry={entry} />
    )}
  </CarouselLineWrapper>
)


export default Carousel;
