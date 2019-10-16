import React from 'react';
import { CarouselNavDot, CarouselNavDotRed } from './stylesheet.jsx';


const NavigationEntry = (props) => {
  if (props.index === props.idx) {
    return (
      <CarouselNavDotRed></CarouselNavDotRed>
    );
  } else {
    return (
      <CarouselNavDot></CarouselNavDot>
    );
  }
}


export default NavigationEntry;
