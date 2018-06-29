import React,{Component} from 'react'
import '../style/activities.scss'
class Activities extends Component{
    render(){
        return (
            <div className="activities">
                {this.props.articles.map(article=>{
                    return (
                        <div className="item" key={article.id}>
                            <div className="main">
                                <div className="name">{article.username}</div>
                                <span>:</span>
                                <div className="content">{article.article.content}</div>
                                <div className="date">{article.article.date}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}
export default Activities