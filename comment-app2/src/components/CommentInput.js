import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.string,
        updateUsername: PropTypes.func,
        handleSubmit: PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            content: ''
        }
        this.usernameChange = this.usernameChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    usernameChange(event) {
        let newName = event.target.value;
        if(this.props.updateUsername)
        this.props.updateUsername(newName)
    }
    contentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    _saveUsername() {
        if(this.props.updateLocalStorage){
            this.props.updateLocalUsername(this.state.username)
        }
    }
    handleSubmit() {
        let username = this.props.username,
            content = this.state.content,
            createTime = +new Date(),
            comment = {username,content,createTime}
        if(this.props.handleSubmit){
            this.props.handleSubmit(comment);
        }
    }
    componentDidMount() {
        this.input.focus()
    }
    componentWillMount(){
        this.setState({
            username: this.props.username
        })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.props.username} onChange={this.usernameChange}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.contentChange}
                            ref={(input) => { this.input = input }} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
          </button>
                </div>
            </div>
        )
    }
}
export default CommentInput;