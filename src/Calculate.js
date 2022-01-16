import React, { Component } from 'react';
import { sunPath } from './sunPath';

class Calculate extends Component {
  render() {
    if (this.props.params.date !== '') {
      let data = sunPath(this.props.params.date, parseFloat(this.props.params.latitude), parseFloat(this.props.params.longitude), parseInt(this.props.params.utcOffset));

      return (
        <div className='container'>
          <p>Last parameters received: {JSON.stringify(this.props.params)}</p>
          <br></br>
          <p>{JSON.stringify(data)}</p>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <p>Nothing calculated.</p>
        </div>
      );
    }
  }
}

export { Calculate };
