import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // TODO: Add styling

class InputA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: 0};
    this.handleChange.bind(this);
    this.props.setStateOfPageA(0);
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value});
    this.props.setStateOfPageA(parseFloat(evt.target.value));
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

class InputB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: 0};
    this.handleChange.bind(this);
    this.props.setStateOfPageB(0);
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value});
    this.props.setStateOfPageB(parseFloat(evt.target.value));
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
    this.state = {inputValA: 0};
    this.state = {inputValB: 0};
    this.setStateOfPageA.bind(this);
    this.setStateOfPageB.bind(this);
  }

  setStateOfPageA = (newValue) => {
    this.setState({inputValA: newValue});
  }

  setStateOfPageB = (newValue) => {
    this.setState({inputValB: newValue});
  }

  renderOutput() {
    return (
      <Output value={(this.state.inputValA + this.state.inputValB)}/>
    );
  }

  render() {
    return (
      <div className="page">
        <div className="inputA">
          <InputA setStateOfPageA = {this.setStateOfPageA}/>
        </div>
        <div className="inputA">
          <InputB setStateOfPageB = {this.setStateOfPageB}/>
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
