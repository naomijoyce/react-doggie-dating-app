import React, { Component } from 'react';
var strftime = require('strftime');

class AppointmentsContainer extends Component {
  render() {
    const { appointments, onClick } = this.props
    console.log(this.props);

    return (
      <div>
        <h2>Your List of Appointments</h2>
        <div className="appoint-grid-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                appointments.map(appointment => {
                  return (
                    <tr>
                      <td>{strftime('%A %B %e, %Y', appointment.date)}</td>
                      <td>{appointment.time}</td>
                      <td><button onClick={()=> onClick(appointment)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default AppointmentsContainer;
