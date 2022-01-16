import React, { Component } from 'react';
import { sunPath } from './sunPath';
import Chart from './Chart.tsx';

class Calculate extends Component {
  render() {
    if (this.props.params.date !== '') {
      let data = sunPath(this.props.params.date, parseFloat(this.props.params.latitude), parseFloat(this.props.params.longitude), parseInt(this.props.params.utcOffset));

      return (
        <div className='container chartBox'>
          <div className='container'>
            <p>Calculation for date: {this.props.params.date}, latitude: {this.props.params.latitude}, longitude: {this.props.params.longitude}, UTC Offset: {this.props.params.utcOffset}.</p>
          </div>
          <div className='container chart'>
            <h5>Time of day x Inclination (degrees above/below horizon)</h5>
            <Chart data={data} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <p>Nothing calculated.</p>
        </div>
      );
    }
  }
}

export { Calculate };
