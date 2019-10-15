import React from 'react';
import styled from 'styled-components';

//image has on-hover movement -- may need to add state to this component

const CarouselEntryWrapper = styled.div`
  z-index: 2;
  max-height: 167px;
  max-width: 167px;
  overflow: hidden;
`;

const CarouselEntryImg = styled.img`
  max-height: 167px;
  max-width: 167px;
  ${CarouselEntryWrapper}: hover & {
    transform: scale(1.1);
    transition: transform .15s ease-in-out;
  }
`;

const CarouselEntry = (props) => (
  <CarouselEntryWrapper>
    <CarouselEntryImg src={props.entry.small_url} alt={props.entry._id} >
    </CarouselEntryImg>
  </CarouselEntryWrapper>
)


export default CarouselEntry;
