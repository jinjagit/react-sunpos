import React, { Component } from 'react';

class InputTimezoneOffset extends Component {
  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.handleChange.bind(this);
    this.props.setPageTimezoneOffset(0);
  }

  handleChange = (evt) => {
    this.setState({offset: evt.target.value});
    this.props.setPageTimezoneOffset(parseFloat(evt.target.value));
  }

  render() {
    return (
      <input type='number' className='form-control'
        value={this.state.offset}
        onChange={evt => this.handleChange(evt)}
      >
      </input>
    );
  }
}

export default InputTimezoneOffset;