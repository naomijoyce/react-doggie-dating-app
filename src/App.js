import React, { Component } from 'react';
import './App.css';
import DogsContainer from './Containers/DogsContainer.js';
import AppointmentsContainer from './Containers/AppointmentsContainer.js';
import DogInfo from './Containers/DogInfo.js';
import TimePicker from 'react-time-picker'
import Calendar from 'react-calendar'

class App extends Component {
  state={
    dogImages: [],
    displayDog: false,
    dogImage: [],
    time: new Date(),
    date: new Date()
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

  timeHandler = (time) => {
    this.setState({time})
  }

  dateHandler = (date) => {
    this.setState({date})
  }


  render() {
    console.log(this.state.dogImages);
    console.log(this.state.time);
    console.log(this.state.date);
    return (
      <div className="App">

        <div className="make-appointments">
          <Calendar value={this.state.date} minDate={new Date()} onChange={this.dateHandler}/>
          <TimePicker value={this.state.time} onChange={this.timeHandler}/>
        </div>
        <DogsContainer dogs={this.state.dogImages} onClick={this.displayHandler}/>
        <AppointmentsContainer/>

        {this.state.displayDog === true? <DogInfo dog={this.state.dogImage} />
        : <h3>Hello! Welcome to Paw Pals!</h3>}
      </div>
    );
  }
}

export default App;
