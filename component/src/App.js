import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       i am a component,my name is {this.props.name+'！'}
      </div>
    );
  }
}

export default App;
