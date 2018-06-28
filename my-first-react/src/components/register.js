import React, { Component } from 'react'
import '../style/register.scss'
class Register extends Component{
    constructor(){
        super();
        this.register = this.register.bind(this);
        this.form = null;
    }
    register(event){
        event.preventDefault();
        // let username = this.form.elements[0].value,
        //     password = this.form.elements[1].value;
        let userData = new FormData(this.form);
        console.log(userData)
        this.props.register(userData);
    }
    render(){
        return (
            <div className="registerItem">
                <div className="shortcut">
                </div>
                <div className="form" id="form" encType="application/x-www-form-urlencoded">
                    <form ref={(form)=> {this.form = form}}>
                        <div className="formControl field">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="formControl field">
                            <input type="password" name="password"  placeholder="password"/>
                        </div>
                        <div className="formControl field">
                            <input type="password"   placeholder="确认密码"/>
                        </div>
                        <div className="formControl">
                            <button className="register" onClick={this.register}>注册</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Register