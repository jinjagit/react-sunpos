import React, { Component } from 'react';

class InputLongitude extends Component {
  constructor(props) {
    super(props);
    this.state = {longitude: 3};
    this.handleChange.bind(this);
    this.props.setPageLongitude(3);
  }

  handleChange = (evt) => {
    this.setState({longitude: evt.target.value});
    this.props.setPageLongitude(parseFloat(evt.target.value));
  }

  render() {
    return (
      <input type='number' className='form-control'
        value={this.state.longitude}
        onChange={evt => this.handleChange(evt)}
      >
      </input>
    );
  }
}

export default InputLongitude;