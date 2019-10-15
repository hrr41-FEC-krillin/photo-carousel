import React from 'react';
import styled from 'styled-components';


const CarouselNavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CarouselNavDot = styled.div`
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 3px;
  background-color: lightgray;
`;

const Navigation = (props) => (
  <CarouselNavbarWrapper>
    {props.total.map(ele =>
      <CarouselNavDot></CarouselNavDot>
    )}
  </CarouselNavbarWrapper>
);


export default Navigation;
