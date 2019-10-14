import React from 'react';

//image has on-hover movement -- may need to add state to this component

const CarouselEntry = (props) => (
  <div className="carousel-thumbnail">
    <img src={props.entry.small_url} alt={props.entry._id} ></img>
  </div>
)


export default CarouselEntry;
