import React, { Component } from 'react';

class InputDate extends Component {
  constructor(props) {
    super(props);
    this.state = {date: ''};
    this.handleChange.bind(this);
    this.props.setPageDate('');
  }

  handleChange = (evt) => {
    this.setState({date: evt.target.value});
    this.props.setPageDate(evt.target.value);
  }

  render() {
    return (
      <div className='mb-3'>
        <label className='form-label'>Date</label>
        <input type='date' min='2002-01-01' max='2042-12-31' className='form-control'
          value={this.state.date}
          onChange={evt => this.handleChange(evt)}
        >
        </input>
      </div>
    );
  }
}

export default InputDate;