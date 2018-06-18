import React, { Component } from 'react';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeString: ''
        }
        this.handleDeletedComment = this.handleDeletedComment.bind(this);
    }
    _updatePublishTime() {
        const createTime = this.props.comment.createTime;
        const duration = (+Date.now() - createTime) / 1000;

        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        });
    }
    _getProcessedContent(comment) {
        return comment
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    handleDeletedComment() {
        const index = this.props.index;
        this.props.deleteComment(index)
    }
    componentWillMount() {
        this._updatePublishTime()
        this._timer = setInterval(
            this._updatePublishTime.bind(this),
            5000
        )
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
            </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }}></p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeletedComment}>
                    删除
                </span>
            </div>
        );
    }
}
export default Comment;