import React, { Component } from 'react';
import InputDate from './inputDate';
import InputLatitude from './inputLatitude';
import InputLongitude from './inputLongitude';
import InputTimezoneOffset from './inputTimezoneOffset';
// import Output from './output';
import Rechart from './rechart.tsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {date: ''};
    this.state = {latitude: 0};
    this.state = {longitude: 0};
    this.state = {offset: 0};
    this.setPageDate.bind(this);
    this.setPageLatitude.bind(this);
    this.setPageLongitude.bind(this);
    this.setPageTimezoneOffset.bind(this);
  }

  setPageDate = (newValue) => {
    this.setState({date: newValue});
  }

  setPageLatitude = (newValue) => {
    this.setState({longitude: newValue});
  }

  setPageLongitude = (newValue) => {
    this.setState({latitude: newValue});
  }

  setPageTimezoneOffset = (newValue) => {
    this.setState({offset: newValue});
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
            {/* <div className='output result'>
              <h5><Output date ={this.state.date}/></h5>
            </div> */}
            <div className='inputA input mb-3'>
              <label className='form-label'>Latitude</label>
              <InputLatitude setPageLatitude = {this.setPageLatitude}/>
            </div>
            <div className='inputB input mb-3'>
              <label className='form-label'>Longitude</label>
              <InputLongitude setPageLongitude = {this.setPageLongitude}/>
            </div>
            <div className='timezone-offset input mb-3'>
              <label className='form-label'>Timezone offset</label>
              <InputTimezoneOffset setPageTimezoneOffset = {this.setPageTimezoneOffset}/>
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
