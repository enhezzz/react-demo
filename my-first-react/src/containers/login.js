import Login from '../components/login'
import React,{Component} from 'react'
import {login} from '../controler/request'
import {connect} from 'react-redux'
import {updateUser,updateMe} from "../actions";

class LoginContainer extends Component{
    constructor(){
        super();
        this.login = this.login.bind(this);
    }
    login(userData){
        login(userData,this.props.updateUser,this.props.updateMeUrl);
        console.log(this.props.state)
    }
    render(){
        return (
            <div>
                <Login login={this.login} {...this.props}> </Login>
            </div>

        )
    }
}
function mapDispatchToProp(dispatch){
    return {
        updateUser: (user)=>{
            dispatch(updateUser(user));
        },
        updateMeUrl: ()=>{
            let url = '/me';
            dispatch(updateMe(url))
        }
    }
}
function mapStateToProp(state){
    return {
        state: state
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(LoginContainer)