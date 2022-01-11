import React, { Component } from 'react';

class InputLongitude extends Component {
  constructor(props) {
    super(props);
    this.state = {longitude: 3};
    this.handleChange.bind(this);
    this.props.setPageLongitude(3);
  }

  handleChange = (evt) => {
    this.setState({longitude: this.limitLongitude(evt.target.value)});
    this.props.setPageLongitude(parseFloat(this.limitLongitude(evt.target.value)));
  }

  limitLongitude = (value) => {
    if (value < -180) {
      return -180;
    } else if (value > 180) {
      return 180;
    } else {
      return value;
    }
  }

  render() {
    return (
      <div className='mb-3'>
        <label className='form-label'>Longitude</label>
        <input
          className='form-control'
          type='number'
          value={this.state.longitude}
          onChange={evt => this.handleChange(evt)}
        >
        </input>
      </div>
    );
  }
}

export default InputLongitude;
