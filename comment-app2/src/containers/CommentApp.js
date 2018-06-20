import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <CommentInput></CommentInput>
        <CommentList></CommentList>
      </div>
    );
  }
}

export default App;
