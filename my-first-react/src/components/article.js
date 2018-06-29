import React,{Component} from 'react'
import '../style/article.scss'
class Article extends Component{
    constructor(){
        super();
        this.publish = this.publish.bind(this);
        this.textarea = null;
    }
    publish(){
        if(this.props.publish){
            let data = new FormData(),
                content = this.textarea.value;
            if(content){
                data.append('content',this.textarea.value);
                this.props.publish(data,this.props.addArticle);
            }else{
                alert('不能发布空白内容')
            }
        }
    }
    render(){
        return (
            <div className="article">
                <div className="header">
                    <span>说你想说的</span>
                </div>
                <div className="inputField">
                    <textarea name="" id="" cols="30" rows="10" placeholder="yayaya..." ref={(textarea)=>{
                        this.textarea = textarea
                    }}></textarea>
                </div>
                <div className="submit-control">
                    <button onClick={this.publish}>发表</button>
                </div>
            </div>
        )
    }
}
export default Article