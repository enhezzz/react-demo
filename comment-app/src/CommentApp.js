import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comment: []
    }
  }
  // handleSubmitComment (comment) {
  //   this.state.comment.push(comment)
  //   this.setState({
  //     comments: this.state.comment
  //   })
  // }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={function (comment) {
          if (!comment) return
          if (!comment.username) return alert('请输入用户名')
          if (!comment.content) return alert('请输入评论内容')
          this.state.comment.push(comment)
          this.setState({
            comment: this.state.comment
          })
        }.bind(this)}></CommentInput>
        <CommentList commentList={this.state.comment}></CommentList>
      </div>
    );
  }
}

export default App;
