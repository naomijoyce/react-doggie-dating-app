import React, { Component } from 'react';
import DogCard from '../Components/DogCard.js';

class DogsContainer extends Component {

  render() {
    const { dogs, onClick } = this.props
    return (
      <div>
        <h2>Pick a dog!</h2>
        <div className="dog-grid-container">
          {Object.values(dogs).slice(1).map((dog) => <DogCard key={dog} dog={dog} onClick={onClick}/>)}


        </div>
      </div>
    );
  }

}

export default DogsContainer;
