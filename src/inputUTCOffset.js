import React, { Component } from 'react';

class InputUTCOffset extends Component {
  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.handleChange.bind(this);
    this.props.setUTCOffset(0);
  }

  handleChange = (evt) => {
    this.setState({offset: this.limitUTCOffset(evt.target.value)});
    this.props.setUTCOffset(parseInt(this.limitUTCOffset(evt.target.value)));
  }

  limitUTCOffset = (value) => {
    if (value < -12) {
      return -12;
    } else if (value > 13) {
      return 13;
    } else {
      return value;
    }
  }

  // /^[0-9 ()+-]+$/

  render() {
    return (
      <div className='mb-3'>
        <label className='form-label'>UTC offset</label>
        <input 
          className='form-control'
          type='number'
          step='1'
          value={this.state.offset}
          onChange={evt => this.handleChange(evt)}
        >
        </input>
      </div>
    );
  }
}

export default InputUTCOffset;
