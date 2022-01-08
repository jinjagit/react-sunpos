import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // TODO: Add styling

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value});
    this.props.setStateOfPage(evt.target.value);
  }

  render() {
    return (
      <input type="number"
        value={this.state.inputValue}
        onChange={evt => this.handleChange(evt)}
      >
      </input>
    );
  }
}

class Output extends React.Component {
  render(n) {
    return (
      <p>Result: {this.props.value}</p>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: 0};
    this.setStateOfPage.bind(this);
  }

  setStateOfPage = (newValue) => {
    this.setState({inputVal: newValue});
  }

  renderOutput() {
    return (
      <Output value={this.state.inputVal}/>
    );
  }

  render() {
    return (
      <div className="page">
        <div className="input">
          <Input setStateOfPage = {this.setStateOfPage}/>
        </div>
        <div className="output">
          {this.renderOutput()}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
