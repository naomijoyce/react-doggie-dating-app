import React, { Component } from 'react';
import TimePicker from 'react-time-picker'
import Calendar from 'react-calendar'

class DogAppointment extends Component {
  state={
    date: new Date(),
    time: new Date()
  }

  timeHandler = (time) => {
    this.setState({time})
  }

  dateHandler = (date) => {
    this.setState({date})
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onSubmit(event, this.state)
    this.setState({
      date: new Date(),
      time: new Date()
    })
  }

  render() {

    return (
      <div className="dog-appointment-container">
        <h3>Get Together for a Date!</h3>
        <form className="make-appointments" onSubmit={this.submitHandler}>
          <Calendar value={this.state.date} minDate={new Date()} onChange={this.dateHandler}/>
          <TimePicker value={this.state.time} onChange={this.timeHandler}/>
          <br/>
          <button>Make Appointment!</button>
        </form>
      </div>
    );
  }

}

export default DogAppointment;
