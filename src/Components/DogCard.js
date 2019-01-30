import React from 'react';

const DogCard = (props) => {
  const {dog, onClick } = props
  console.log(props);
  return (
    <div className="grid-item">
      {dog.map(dog => <img key={dog} src={dog} alt="" onClick={()=> onClick(dog)} />)}
    </div>
  )
};

export default DogCard;
