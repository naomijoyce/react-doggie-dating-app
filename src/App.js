import React, { Component } from 'react';
import './App.css';
import DogsContainer from './Containers/DogsContainer.js';
import AppointmentsContainer from './Containers/AppointmentsContainer.js';
import DogInfo from './Containers/DogInfo.js';

class App extends Component {
  state={
    dogImages: [],
    displayDog: false,
    dogImage: []
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/12')
    .then(response => response.json())
    .then(data =>
      this.setState({
        dogImages: data
      })
    )
  }

  displayHandler = (dog) => {
    console.log('something', dog);
    this.setState({
      dogImage: dog,
      displayDog: !this.state.displayDog
    })
  }

  render() {
    console.log(this.state.dogImages);
    return (
      <div className="App">
        <DogsContainer dogs={this.state.dogImages} onClick={this.displayHandler}/>
        <AppointmentsContainer />

        {this.state.displayDog === true? <DogInfo dog={this.state.dogImage} />
        : <h3>Hello! Welcome to Paw Pals!</h3>}
      </div>
    );
  }
}

export default App;
