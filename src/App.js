import React, { Component } from 'react';
import './App.css';
import DogsContainer from './Containers/DogsContainer.js';
import AppointmentsContainer from './Containers/AppointmentsContainer.js';
import DogInfo from './Containers/DogInfo.js';
import DogAppointment from './Components/DogAppointment.js';
var strftime = require('strftime');

class App extends Component {
  state={
    dogImages: [],
    displayDog: false,
    dogImage: [],
    time: new Date(),
    date: new Date(),
    appointments: []
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
    this.setState({
      dogImage: dog,
      displayDog: !this.state.displayDog
    })
  }

  submitHandler = (event, appointment) => {
    event.preventDefault()
    let newAppointment = [...this.state.appointments, appointment]
    this.setState({
      appointments: newAppointment
    })
  }

  render() {
    console.log(this.state.appointments.map(app => strftime('%A %B %e %Y', app.date)));

    return (
      <div className="App">
        {this.state.displayDog === true? <DogAppointment onSubmit={this.submitHandler} /> : null}

        <DogsContainer dogs={this.state.dogImages} onClick={this.displayHandler}/>

        {
          this.state.appointments.length > 0?
          <AppointmentsContainer appointments={this.state.appointments} /> :
          null
        }

        {this.state.displayDog === true? <DogInfo dog={this.state.dogImage} />
        : <h3>Hello! Welcome to Paw Pals!</h3>}
      </div>
    );
  }
}

export default App;
