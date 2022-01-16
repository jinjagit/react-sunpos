import React, { Component } from 'react';

class InputLatitude extends Component {
  constructor(props) {
    super(props);
    this.state = {latitude: 5};
    this.handleChange.bind(this);
    this.props.setPageLatitude(5);
  }

  handleChange = (evt) => {
    this.setState({latitude: this.limitLatitude(evt.target.value)});
    this.props.setPageLatitude(parseFloat(this.limitLatitude(evt.target.value)));
  }

  limitLatitude = (value) => {
    if (value < -90) {
      return -90;
    } else if (value > 90) {
      return 90;
    } else {
      return value;
    }
  }

  render() {
    return (
      <div className='mb-3'>
        <label className='form-label'>Latitude</label>
        <input
          className='form-control'
          type='number'
          min='-90'
          max='90'
          value={this.state.latitude}
          onChange={evt => this.handleChange(evt)}
        >
        </input>
      </div>
    );
  }
}

export default InputLatitude;
