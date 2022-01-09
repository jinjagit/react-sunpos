import React, { Component } from 'react';

class Output extends Component {
  render(n) {
    return (
      <p>Result: {this.props.value} Date: {this.props.date}</p>
    );
  }
}

export default Output;
