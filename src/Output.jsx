import React, { Component } from 'react';
import Table from './Table';
import Graphic from './Graphic';
import Chart from './Chart.tsx';

class Output extends Component {
  render() {    
    if (this.props.data.sunrise !== undefined) {
      return (
        <div>
          <div className='calc container'>     
            <p className='center-text'>
              <strong>Calculation for: </strong>
               Date: {`${this.props.params.date.split('-').reverse().join('/')}`},
               Latitude: {this.props.params.latitude},
               Longitude: {this.props.params.longitude},
               UTC Offset: {this.props.params.utcOffset}
            </p>
            <div className='row g-3'>
              <div className='col-lg-1'></div>
              <Table
                sunrise={this.props.data.sunrise.time}
                zenith={this.props.data.zenith.time}
                sunset={this.props.data.sunset.time}
              />
              <div className='col-lg-1'></div>
              <Graphic
                daylight={this.props.data.daylight}
                darkness={this.props.data.darkness}
                dayPc={this.props.data.dayPc}
                darkPc={this.props.data.darkPc}
              />
              <div className='col-lg-1'></div>
            </div>
          </div>
          <div className='container'>
            <div className='chartBox'>
              <div className='chart'>
                <h5 className='chart-title'>Inclination<sup>*</sup> of Sun (degrees) x Time (HH:MM)</h5>
                <Chart data={this.props.data.pathData} />
              </div>
            </div>
            <p className='annotation'><sup>*</sup>This apparent (observed) inclination of the sun includes an estimation of atmospheric refraction (inversely related to deviation from horizontal).</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <p className='center-text'>Nothing calculated.</p>
        </div>
      );
    }
  }
}

export default Output;
