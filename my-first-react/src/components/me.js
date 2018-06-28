import React,{Component} from 'react'
import '../style/me.scss'
class Me extends Component{
    render(){
        return (
            <div className="me">
                <div className="shortcut">
                    <div className="avatar">

                    </div>
                    <span>{this.props.user?this.props.user.name: ''}</span>
                </div>
                <div className="main">
                    <div className="available">
                        <div className="item">我的发表</div>
                    </div>
                    <div className="logout">
                        <button onClick={this.props.logout}>logout</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Me