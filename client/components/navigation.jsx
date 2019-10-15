import React from 'react';
import styled from 'styled-components';
import NavigationEntry from './navigationEntry.jsx';


const CarouselNavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Navigation = (props) => (
  <CarouselNavbarWrapper>
    {props.total.map((ele, idx) =>
      <NavigationEntry idx={idx} index={props.index} />
    )}
  </CarouselNavbarWrapper>
)


export default Navigation;
