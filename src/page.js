import React, { Component } from 'react';
import InputLatitude from './inputLatitude';
import InputLongitude from './inputLongitude';
import InputDate from './inputDate';
import Output from './output';
import Rechart from './rechart.tsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {longitude: 0};
    this.state = {latitude: 0};
    this.state = {date: ''};
    this.setPageLatitude.bind(this);
    this.setPageLongitude.bind(this);
    this.setPageDate.bind(this);
  }

  setPageLatitude = (newValue) => {
    this.setState({longitude: newValue});
  }

  setPageLongitude = (newValue) => {
    this.setState({latitude: newValue});
  }

  setPageDate = (newValue) => {
    this.setState({date: newValue});
  }

  render() {
    return (
      <div className='page'>
        <div className='big-spacer'></div>

        <div className='container inputs'>
          <form>
            <div className='date input mb-3'>
              <label className='form-label'>Date</label>
              <InputDate setPageDate = {this.setPageDate}/>
            </div>
            <div className='output result'>
              <h5><Output date ={this.state.date}/></h5>
            </div>
            <div className='inputA input mb-3'>
              <label className='form-label'>Latitude</label>
              <InputLatitude setPageLatitude = {this.setPageLatitude}/>
            </div>
            <div className='inputA input mb-3'>
              <label className='form-label'>Longitude</label>
              <InputLongitude setPageLongitude = {this.setPageLongitude}/>
            </div>
          </form>
        </div>

        <div className='spacer'></div>

        <div className='container chart'>
          <Rechart latitude={this.state.longitude} longitude={this.state.latitude}/>
        </div>
      </div>
    );
  }
}

export default Page;
