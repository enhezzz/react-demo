import React,{Component} from 'react'
import {Link} from 'react-router'
import '../style/me.scss'
class Me extends Component{
    constructor(){
        super();
        this.updateAvatar = this.updateAvatar.bind(this);
    }
    updateAvatar(){
        this.fileControl.click();
        this.fileControl.onchange = ()=>{
            console.log(this.fileControl.files[0])
            let data = new FormData();
            data.append('avatar',this.fileControl.files[0]);
            this.props.updateAvatar(data);
        }

    }
    render(){
        return (
            <div className="me">
                <div className="shortcut">
                    <div className="avatar" onClick={this.updateAvatar} style={{backgroundImage: `url(${this.props.user.avatarPath})`}}>

                    </div>
                    <input type="file" accept="" className="file-control" ref={(fileControl)=>{
                        this.fileControl = fileControl
                    }}/>
                    <span>{this.props.user?this.props.user.name: ''}</span>
                </div>
                <div className="main">
                    <div className="available">
                        <div className="item">
                            <Link to="my-articles">我的发表</Link>
                        </div>
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