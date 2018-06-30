import React,{Component} from 'react'
import Me from '../components/me'
import {connect} from 'react-redux'
import {UPDATE_ME,UPDATE_USER,updateMe,updateUser,updateAvatar} from "../actions";
import {logout,update_avatar} from '../controler/request'
class MeContainer extends Component{
    constructor(){
        super();
        this.logout = this.logout.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
    }
    logout(){
        logout.bind(this)(this.props.updateInfo)
    }
    updateAvatar(data){
        update_avatar(data,this.props.updateAvatar)
    }
    render(){
        return (
            <Me logout={this.logout} user={this.props.user} updateAvatar={this.updateAvatar}></Me>
        )
    }
}
function mapStateToProp(state){
    return {
        user: state.user
    }
}
function mapDispatchToProp(dispatch){
    return {
        updateInfo: ()=>{
            let url = '/login'
            dispatch(updateMe(url));
            dispatch(updateUser({}))
        },
        updateAvatar: (avatarPath)=>{
            dispatch(updateAvatar(avatarPath));
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(MeContainer)