import React from 'react';

const DogInfo = (props) => {
  return(
    <div className="dog-info">
      <h3>Say Hi!</h3>
      <img src={props.dog} alt="" />

    </div>

  )
};

export default DogInfo;
