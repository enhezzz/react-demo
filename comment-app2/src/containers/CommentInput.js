import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'
class CommentInputContainer extends Component {
    static propType = {
        comments: PropTypes.array,
        handleSubmit: PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            username: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillMount() {
        if (localStorage.username)
            this.setState({
                username: localStorage.username
            })
    }
    updateUsername(newName) {
        this.setState({
            username: newName
        });

    }
    handleSubmit(comment) {
        if (this.props.handleSubmit) {
            let comments = [...this.props.comments, comment];
            localStorage.comments = JSON.stringify(comments)
            this.props.handleSubmit(comment);
        }



    }
    render() {
        return <CommentInput username={this.state.username} updateUsername={this.updateUsername}
            handleSubmit={this.handleSubmit}
        />
    }
}
function mapStateToProp(state) {
    return {
        comments: state.comments
    }
}
function mapDispatchToProp(dispatch) {
    return {
        handleSubmit: (comment) => {
            if (!comment.username)
                alert('请输入姓名')
            else if (!comment.content)
                alert('请输入comment')
            else {
                dispatch(addComment(comment));
                localStorage.username = comment.username;
            }

        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(CommentInputContainer)