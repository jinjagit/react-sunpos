import React, { Component } from 'react';

class Calculate extends Component {
  render() {
    if (this.props.params.date !== '') {
      let result = 2 * this.props.params.utcOffset;

      return (
        <div className='container'>
          <p>Last parameters received: {JSON.stringify(this.props.params)}</p>
          <p>Do some math: 2 * UTC offset = {result}</p>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <p>No parameters received yet.</p>
        </div>
      );
    }
  }
}

export { Calculate };
