import React, { Component } from 'react';

class InputUTCOffset extends Component {
  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.handleChange.bind(this);
    this.props.setUTCOffset(0);
  }

  handleChange = (evt) => {
    this.setState({offset: evt.target.value});
    this.props.setUTCOffset(parseFloat(evt.target.value));
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

export default InputUTCOffset;