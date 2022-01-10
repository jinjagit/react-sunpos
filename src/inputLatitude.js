import React, { Component } from 'react';

class InputLatitude extends Component {
  constructor(props) {
    super(props);
    this.state = {latitude: 5};
    this.handleChange.bind(this);
    this.props.setPageLatitude(5);
  }

  handleChange = (evt) => {
    this.setState({latitude: evt.target.value});
    this.props.setPageLatitude(parseFloat(evt.target.value));
  }

  render() {
    return (
      <input type='number' className='form-control'
        value={this.state.latitude}
        onChange={evt => this.handleChange(evt)}
      >
      </input>
    );
  }
}

export default InputLatitude;
