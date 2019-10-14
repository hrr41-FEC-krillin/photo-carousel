import React from 'react';

/*
Currently:
  > 'o' is a placeholder -- work will be done in a different pull request
In future pull request:
  > will update 'o' to css circles
  > navigation circle will turn red to indicate 'place' in photo carousel
*/
const Navigation = (props) => (
  <div>
    {props.total.map(ele =>
      'o'
    )}
  </div>
);


export default Navigation;
