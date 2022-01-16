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
            <p>Calculation for date: {this.props.params.date}, latitude: {this.props.params.latitude}, longitude: {this.props.params.longitude}, UTC Offset: {this.props.params.utcOffset}.</p>
          </div>
          <div className='container chartContainer'>
            <div className='chartBox'>
              <div className='chart'>
                <h5 className='title'>Time of day x Inclination (apparent degrees above/below horizon<sup>*</sup>)</h5>
                <Chart data={data} />
              </div>
            </div>
            <p><sup>*</sup>This apparent (observed) inclination of the sun includes an estimation of atmospheric refraction (inversely related to inclination).</p>
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
