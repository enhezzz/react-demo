import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
        this.usernameChange = this.usernameChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    usernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    contentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    _saveUsername() {
        localStorage.username = this.state.username;
    }
    handleSubmit() {

        const { username, content } = this.state
        this.props.onSubmit({ username, content,
        createTime: +new Date()
        })
        this._saveUsername();
        this.setState({ content: '' })
    }
    componentDidMount() {
        this.input.focus()
    }
    componentWillMount(){
        if(localStorage.username){
            this.setState({
                username: localStorage.username
            })
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.usernameChange}
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