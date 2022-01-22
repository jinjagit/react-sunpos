import React, { Component } from 'react';

class Table extends Component {
  render() {    
    return (
      <div className='col-lg-2 d-flex align-items-center justify-content-center'>
        <table className='table w-auto'>
          <thead>
            <tr>
              <th scope='col'>Event</th>
              <th scope='col'>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunrise</td>
              <td>{this.props.sunrise}</td>
            </tr>
            <tr>
              <td>Zenith</td>
              <td>{this.props.zenith}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{this.props.sunset}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
