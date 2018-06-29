import React,{Component} from 'react'
import '../style/footer.scss'
import {Link} from 'react-router'
class Footer extends Component{
    render(){
       return (<div className="footer">
       <div className="item">
           <Link to="/activities" activeClassName="actived">
               <span className="fa fa-camera-retro fa-lg"> </span>
               <div>
                   <span>动态</span>
               </div>
           </Link>
       </div>
       <div className="item">
           <Link to="/article" activeClassName="actived">
               <span className="fa fa-eyedropper"> </span>
               <div>
                   <span>发表</span>
               </div>
           </Link>
       </div>
       <div className="item" >
                <Link to={this.props.url} activeClassName="actived">
                    <span className="fa fa-user-circle"> </span>
                    <div>
                        <span>我</span>
                    </div>
                </Link>

       </div>
   </div>)
        
    }
}
export default Footer;