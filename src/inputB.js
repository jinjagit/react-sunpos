import React, { Component } from 'react';

class InputB extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: 0};
    this.handleChange.bind(this);
    this.props.setStateOfPageB(0);
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value});
    this.props.setStateOfPageB(parseFloat(evt.target.value));
  }

  render() {
    return (
      <input type="number"
        value={this.state.inputValue}
        onChange={evt => this.handleChange(evt)}
      >
      </input>
    );
  }
}

export default InputB;
