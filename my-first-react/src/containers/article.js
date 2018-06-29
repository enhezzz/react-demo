import React,{Component} from 'react'
import Article from '../components/article'
import {publish} from "../controler/request";
import {addArticle} from "../actions";
import {connect} from 'react-redux'
class ArticleContainer extends Component{
    render(){
        return (
            <Article publish={publish.bind(this)} {...this.props}></Article>
        )
    }
}
function mapDispatchToProp(dispatch){
    return {
        addArticle: (article)=>{
            dispatch(addArticle(article))
        }
    }
}

export default connect(null,mapDispatchToProp)(ArticleContainer);