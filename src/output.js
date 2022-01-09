import React, { Component } from 'react';

class Output extends Component {
  render(n) {
    return (
      <p>Date: {this.props.date || 'not set'}</p>
    );
  }
}

export default Output;
