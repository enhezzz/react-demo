import React,{Component} from 'react'
import '../style/footer.scss'
import {Link} from 'react-router'
class Footer extends Component{
    render(){
       return (<div className="footer">
       <div className="item">
           <span className="fa fa-camera-retro fa-lg"></span>
           <div>
               <span>动态</span>
           </div>
       </div>
       <div className="item">
           <span className="fa fa-eyedropper"></span>
           <div>
               <span>发表</span>
           </div>
       </div>
       <div className="item">
            <span className="fa fa-user-circle"> </span>
            <div>
                <Link to={this.props.url}>我</Link>
            </div>
       </div>
   </div>)
        
    }
}
export default Footer;