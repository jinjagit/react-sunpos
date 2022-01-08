import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // TODO: Add styling

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    };
  }

  render() {
    return (
      <div>
        <p className="input">I am in input div.</p>
        <input type="number"
        value={this.state.inputValue}
        onChange={evt => this.updateInputValue(evt)}>
        </input>
        <p>{this.state.inputValue}</p>
      </div>
    );
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
}

class Output extends React.Component {
  render(n) {
    return (
      <div>
        <p className="output">I am in output div.</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 77,
    };
  }

  renderOutput(val) {
    return (
      <Output
        value={this.state.inputVal}
      />
    );
  }

  render() {
    return (
      <div className="page">
        <div className="input">
          <Input />
        </div>
        <div className="output">
        {this.renderOutput(6)}
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
