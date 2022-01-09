import React, { Component } from 'react';

class InputA extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: 5};
    this.handleChange.bind(this);
    this.props.setStateOfPageA(5);
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value});
    this.props.setStateOfPageA(parseFloat(evt.target.value));
  }

  render() {
    return (
      <input type='number' className='form-control'
        value={this.state.inputValue}
        onChange={evt => this.handleChange(evt)}
      >
      </input>
    );
  }
}

export default InputA;
