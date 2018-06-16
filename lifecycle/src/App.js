import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        opacity: 1,
        transition: 'opacity 1s'
      }
    }
  }
  componentDidMount() {
    // setTimeout(() => {
    //   setTimeout(() => {

    //   }, 1000);
    // }, 1000);
    this.timer = setInterval(() => {
      let newStyle = Object.assign({}, this.state.style);
      if (newStyle.opacity == 1)
        newStyle.opacity = 0;
      else newStyle.opacity = 1;
      this.setState({
        style: newStyle
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className="App" style={this.state.style}>
        <span>i can show and hidden!</span>
      </div>
    );
  }
}

export default App;
