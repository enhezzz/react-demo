import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { initComments, deleteComment } from '../reducers/comments'
class CommentListContainer extends Component {
    static propTypes = {
        initComments: PropTypes.func,
        deleteComment: PropTypes.func,
        commentListL: PropTypes.array
    }
    componentWillMount() {
        // componentWillMount 生命周期中初始化评论
        this._loadComments()
    }
    _loadComments() {
        // 从 LocalStorage 中加载评论
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        // this.props.initComments 是 connect 传进来的
        // 可以帮我们把数据初始化到 state 里面去
        this.props.initComments(comments)
    }
    deleteComment(index) {
        return () => {
            if (this.props.deleteComment)
                this.props.deleteComment(index);
            let comments = JSON.parse(localStorage.comments),
                newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

            localStorage.comments = JSON.stringify(newComments)
        }
        
    }
    render() {
        return (
            <CommentList commentList={this.props.commentList} deleteComment={this.deleteComment.bind(this)} />
        )
    }
}
function mapStateToProp(state) {
    return {
        commentList: state.comments
    }
}
function mapDispatchToProp(dispatch) {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        deleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(CommentListContainer)