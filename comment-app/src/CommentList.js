import React, { Component } from 'react';
import Comment from './Comment'
class CommentList extends Component {
    constructor(props) {
        super(props);

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
                            deleteComment={this.props.deleteComment} index={index} />
                    })
                }
            </div>
        )
    }
}
export default CommentList;