import React, { Component } from 'react';
import InputA from './inputA';
import InputB from './inputB';
import Date from './date';
import Output from './output';
import Plot from './plot.tsx';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValA: 0};
    this.state = {inputValB: 0};
    this.state = {date: ''};
    this.setStateOfPageA.bind(this);
    this.setStateOfPageB.bind(this);
    this.setStateOfPageDate.bind(this);
  }

  setStateOfPageA = (newValue) => {
    this.setState({inputValA: newValue});
  }

  setStateOfPageB = (newValue) => {
    this.setState({inputValB: newValue});
  }

  setStateOfPageDate = (newValue) => {
    this.setState({date: newValue});
  }

  render() {
    return (
      <div className='page'>
        <div className='spacer'></div>

        <div className='container inputs'>
          <form>
            <div className='date input mb-3'>
              <label className='form-label'>Date</label>
              <Date setStateOfPageDate = {this.setStateOfPageDate}/>
            </div>
            <div className='inputA input mb-3'>
              <label className='form-label'>x value</label>
              <InputA setStateOfPageA = {this.setStateOfPageA}/>
            </div>
            <div className='inputA input mb-3'>
              <label className='form-label'>y value</label>
              <InputB setStateOfPageB = {this.setStateOfPageB}/>
            </div>
          </form>
        </div>

        <div className='spacer'></div>

        <div className='output result'>
          <h5><Output date ={this.state.date}/></h5>
        </div>
        <div className='container plot'>
          <div className='container chart'>
            <Plot a={this.state.inputValA} b={this.state.inputValB}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
