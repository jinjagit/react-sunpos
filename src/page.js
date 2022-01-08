import React, { Component } from 'react';
import InputA from './inputA';
import InputB from './inputB';
import Output from './output';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValA: 0};
    this.state = {inputValB: 0};
    this.setStateOfPageA.bind(this);
    this.setStateOfPageB.bind(this);
  }

  setStateOfPageA = (newValue) => {
    this.setState({inputValA: newValue});
  }

  setStateOfPageB = (newValue) => {
    this.setState({inputValB: newValue});
  }

  renderOutput() {
    return (
      <Output value={(this.state.inputValA + this.state.inputValB)}/>
    );
  }

  render() {
    return (
      <div className="page">
        <div className="inputs">
          <div className='spacer'></div>
          <div className="inputA input">
            <InputA setStateOfPageA = {this.setStateOfPageA}/>
          </div>
          <div className='spacer'></div>
          <div className="inputA input">
            <InputB setStateOfPageB = {this.setStateOfPageB}/>
          </div>
          <div className='spacer'></div>
        </div>
        <div className="output result">
          <h5>{this.renderOutput()}</h5>
        </div>
      </div>
    );
  }
}

export default Page;
