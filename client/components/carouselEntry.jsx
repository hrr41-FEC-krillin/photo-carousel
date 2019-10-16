import React from 'react';
import { CarouselEntryWrapper, CarouselEntryImg } from './stylesheet.jsx';


const CarouselEntry = (props) => (
  <CarouselEntryWrapper>
    <CarouselEntryImg src={props.entry.small_url} alt={props.entry._id} >
    </CarouselEntryImg>
  </CarouselEntryWrapper>
)


export default CarouselEntry;
