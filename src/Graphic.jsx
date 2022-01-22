import React, { Component } from 'react';

class Graphic extends Component {
  render() {    
    return (
      <div className='col-lg-7 d-flex align-items-center justify-content-center'>
        <div className='full'>
          <div>
            <div className='half dur-title-l'>
              <p className='right-text'>{this.props.daylight} of daylight</p>
            </div>
            <div className='half dur-title-r'>
              <p className='left-text'>{this.props.darkness} of darkness</p>
            </div>
          </div>
          <div>
            <div className='half dur-pc-box-l'>
              <div className='day-bar' style={{width: `calc(calc(100% - 80px) * ${this.props.dayPc / 100})`}}></div>
              <div className='day-bar-text-box'>
                <p className='day-bar-text'>{this.props.dayPc}%</p>
              </div>
            </div>
            <div className='half dur-pc-box-r'>
              <div className='dark-bar' style={{width: `calc(calc(100% - 80px) * ${this.props.darkPc / 100})`}}></div>
              <div className='dark-bar-text-box'>
                <p className='dark-bar-text'>{this.props.darkPc}%</p>
              </div>
            </div>
          </div>
          <div>
            <div className='half dur-bot-l'></div>
            <div className='half dur-bot-r'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Graphic;