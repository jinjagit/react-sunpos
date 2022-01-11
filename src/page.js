import React, { Component } from 'react';
import InputDate from './inputDate';
import InputLatitude from './inputLatitude';
import InputLongitude from './inputLongitude';
import InputUTCOffset from './inputUTCOffset';
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
    this.setUTCOffset.bind(this);
  }

  setPageDate = (newValue) => {
    this.setState({date: newValue});
  }

  setPageLatitude = (newValue) => {
    this.setState({latitude: newValue});
  }

  setPageLongitude = (newValue) => {
    this.setState({longitude: newValue});
  }

  setUTCOffset = (newValue) => {
    this.setState({offset: newValue});
  }

  render() {
    return (
      <div className='page'>
        <div className='big-spacer'></div>

        <div className='inputs container'>
          <form>
            <InputDate setPageDate = {this.setPageDate}/>           
            <InputLatitude setPageLatitude = {this.setPageLatitude}/>            
            <InputLongitude setPageLongitude = {this.setPageLongitude}/>
            <InputUTCOffset setUTCOffset = {this.setUTCOffset}/>
          </form>
        </div>

        <div className='spacer'></div>

        <Rechart latitude={this.state.longitude} longitude={this.state.latitude}/>
      </div>
    );
  }
}

export default Page;
