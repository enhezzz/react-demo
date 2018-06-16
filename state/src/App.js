import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLike: true
    }
    this.likeOrUnlike = this.likeOrUnlike.bind(this);
  }
  likeOrUnlike(){
    this.setState({
      isLike: !this.state.isLike
    })
  }
  render() {
    return (
      <div className="App">
          <span onClick={this.likeOrUnlike}>{this.state.isLike?'喜欢': '不喜欢'}</span>
      </div>
    );
  }
}

export default App;
