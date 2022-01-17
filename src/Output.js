import React, { Component } from 'react';
import Chart from './Chart.tsx';

class Output extends Component {
  render() {    
    if (this.props.params.date !== '') {
      return (
        <div>
          <div className='container'>          
            <p>Calculation for Date: {this.props.params.date}, Latitude: {this.props.params.latitude}, Longitude: {this.props.params.longitude}, UTC Offset: {this.props.params.utcOffset}.</p>
            <p>Sunrise: {this.props.data.sunrise.time}</p>
            <p>Zenith: {this.props.data.zenith.time}</p>
            <p>Sunset: {this.props.data.sunset.time}</p>
          </div>
          <div className='container chartContainer'>
            <div className='chartBox'>
              <div className='chart'>
                <h5 className='title'>Inclination<sup>*</sup> of Sun (degrees) x Time (HH:MM)</h5>
                <Chart data={this.props.data.pathData} />
              </div>
            </div>
            <p><sup>*</sup>This apparent (observed) inclination of the sun includes an estimation of atmospheric refraction (inversely related to deviation from horizontal).</p>
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

export { Output };
