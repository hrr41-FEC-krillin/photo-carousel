import React from 'react';
import styled from 'styled-components';


const CarouselNavDot = styled.div`
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 3px;
  background-color: lightgray;
`;

const CarouselNavDotRed = styled(CarouselNavDot)`
  background-color: red;
`;

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
