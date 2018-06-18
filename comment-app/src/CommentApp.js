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
    this.deleteComment = this.deleteComment.bind(this);
  }
  // handleSubmitComment (comment) {
  //   this.state.comment.push(comment)
  //   this.setState({
  //     comments: this.state.comment
  //   })
  // }
  _saveComment(comments) {
    localStorage.comments = JSON.stringify(comments);
  }
  deleteComment(index) {
    console.log(index);
    this.state.comment.splice(index, 1);
    const comments = this.state.comment;
    this.setState({
      comments
    });
    this._saveComment(comments)
  }
  componentWillMount() {
    if (localStorage.comments)
      this.setState({
        comment: JSON.parse(localStorage.comments)
      })
  }
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
          this._saveComment(this.state.comment);
        }.bind(this)}></CommentInput>
        <CommentList commentList={this.state.comment} deleteComment={this.deleteComment}></CommentList>
      </div>
    );
  }
}

export default App;
