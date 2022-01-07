import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component {
  render() {
    return (
      <p className="input">I am input.</p>
    );
  }
}

class Output extends React.Component {
  render() {
    return (
      <p className="output">I am output.</p>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="input">
          <Input />
        </div>
        <div className="output">
          <Output />
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
