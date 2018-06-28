import {connect} from 'react-redux'
import React,{Component} from 'react'
import Register from '../components/register'
import * as Request from '../controler/request'

class RegisterContainer extends Component{
    constructor(){
        super();
        this.register = this.register.bind(this);
    }
    register(user){
        Request.register(user);
    }
    render(){
        return (
            <Register register={this.register}></Register>
        )
    }
}


export default RegisterContainer