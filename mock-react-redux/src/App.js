import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header'
import Content from './containers/Content'
import PropTypes from 'prop-types'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App;
