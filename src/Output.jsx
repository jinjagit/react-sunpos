import React, { Component } from 'react';
import Chart from './Chart.tsx';

class Output extends Component {
  render() {    
    if (this.props.data.sunrise !== undefined) {
      return (
        <div>
          <div className='calc-title container'>     
            <p className='center-text'><strong>Calculation for:</strong> Date: {this.props.params.date}, Latitude: {this.props.params.latitude}, Longitude: {this.props.params.longitude}, UTC Offset: {this.props.params.utcOffset}</p>
            <div className='row g-3'>
              <div className='col-lg-1'></div>
              <div className='col-lg-2 d-flex align-items-center justify-content-center'>
                <table className="table w-auto">
                  <thead>
                    <tr>
                      <th scope="col">Event</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sunrise</td>
                      <td>{this.props.data.sunrise.time}</td>
                    </tr>
                    <tr>
                      <td>Zenith</td>
                      <td>{this.props.data.zenith.time}</td>
                    </tr>
                    <tr>
                      <td>Sunset</td>
                      <td>{this.props.data.sunset.time}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-7 d-flex align-items-center justify-content-center'>
                <div className='full'>
                  <div>
                    <div className='half dur-title-l'>
                      <p className='right-text'>{this.props.data.daylight} of daylight</p>
                    </div>
                    <div className='half dur-title-r'>
                      <p className='left-text'>{this.props.data.darkness} of darkness</p>
                    </div>
                  </div>
                  <div>
                    <div className='half dur-pc-box-l'>
                      <div className='day-bar' style={{width: `calc(calc(100% - 80px) * ${this.props.data.dayPC / 100})`}}></div>
                      <div className='day-bar-text-box'>
                        <p className='day-bar-text'>{this.props.data.dayPC}%</p>
                      </div>
                    </div>
                    <div className='half dur-pc-box-r'>
                      <div className='dark-bar' style={{width: `calc(calc(100% - 80px) * ${this.props.data.darkPC / 100})`}}></div>
                      <div className='dark-bar-text-box'>
                        <p className='dark-bar-text'>{this.props.data.darkPC}%</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='half dur-bot-l'>
                    </div>
                    <div className='half dur-bot-r'>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-1'></div>
            </div>
          </div>
          <div className='container borderlessContainer'>
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
          <p className='center-text'>Nothing calculated.</p>
        </div>
      );
    }
  }
}

export default Output;
