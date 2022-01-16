import React, { Component } from 'react';
import { sunPath } from './sunPath';
import Chart from './Chart.tsx';

class Calculate extends Component {
  render() {
    if (this.props.params.date !== '') {
      let data = sunPath(this.props.params.date, parseFloat(this.props.params.latitude), parseFloat(this.props.params.longitude), parseInt(this.props.params.utcOffset));

      return (
        <div>
          <div className='container'>
            <p>Last parameters received: {JSON.stringify(this.props.params)}</p>
          </div>
          <div className='container chart'>
            <h5>Time (minutes) x Inclination (degrees above/below horizon)</h5>
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
