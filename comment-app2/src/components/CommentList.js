import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'
class CommentList extends Component {
    static propTypes = {
        commentList: PropTypes.array,
        deleteComment: PropTypes.func
    }
    static defaultProps = {
        commentList: []
    }
    render() {
        return (
            <div>
                {
                    this.props.commentList.map((comment, index) => {
                        return <Comment comment={comment} key={index}
                            deleteComment={this.props.deleteComment(index)} />
                    })
                }
            </div>
        )
    }
}
export default CommentList;