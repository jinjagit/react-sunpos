import React, { Component } from 'react';

class Output extends Component {
  render(n) {
    return (
      <p>Result: {this.props.value}</p>
    );
  }
}

export default Output;
