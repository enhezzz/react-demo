import React,{Component} from 'react'
import Me from '../components/me'
import {connect} from 'react-redux'
import {UPDATE_ME,UPDATE_USER,updateMe,updateUser} from "../actions";
import {logout} from '../controler/request'
class MeContainer extends Component{
    constructor(){
        super();
        this.logout = this.logout.bind(this)
    }
    logout(){
        logout.bind(this)(this.props.updateInfo)
    }
    render(){
        return (
            <Me logout={this.logout} user={this.props.user}></Me>
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
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(MeContainer)