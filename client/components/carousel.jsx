import React from 'react';
import styled from 'styled-components';
import CarouselEntry from './carouselEntry.jsx';


const CarouselLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;;

  z-index: 1;
  grid-column-start: 1;
  grid-column-end: 29;
  grid-row-start: 1;
  grid-row-end: 4;
`;

const Carousel = (props) => (
  <CarouselLineWrapper>
    {props.carousel.map(entry =>
      <CarouselEntry entry={entry} />
    )}
  </CarouselLineWrapper>
)


export default Carousel;
