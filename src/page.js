import React, { Component } from 'react';
import InputA from './inputA';
import InputB from './inputB';
import Date from './date';
import Output from './output';

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

  renderOutput() {
    return (
      <Output value={(this.state.inputValA + this.state.inputValB)} date ={this.state.date}/>
    );
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
              <label className='form-label'>Input A</label>
              <InputA setStateOfPageA = {this.setStateOfPageA}/>
            </div>
            <div className='inputA input mb-3'>
              <label className='form-label'>Input B</label>
              <InputB setStateOfPageB = {this.setStateOfPageB}/>
            </div>
          </form>
        </div>

        <div className='spacer'></div>

        <div className='output result'>
          <h5>{this.renderOutput()}</h5>
        </div>
      </div>
    );
  }
}

export default Page;
