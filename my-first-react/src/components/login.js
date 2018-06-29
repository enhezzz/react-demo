import React, { Component } from 'react'
import { Link } from 'react-router'
import '../style/login.scss'
class Login extends Component {
    constructor(){
        super();
        this.form = null;
        this.login = this.login.bind(this)
    }
    login(event){
        event.preventDefault();
        let userData = new FormData(this.form);
        this.props.login(userData);
    }
    render() {
        return (
            <div className='log-in'>
                <div className="shortcut">

                </div>
                <div className="form">
                    <form action="" onSubmit={this.login} ref={(form)=>{
                        this.form = form
                    }}>
                        <div className="formControl field">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="formControl field">
                            <input type="password" name="password" id="" placeholder="password"/>
                        </div>

                        <div className="otherOpera">
                            <Link to="/register">立即注册</Link>
                            <Link to="findPWD">忘记密码</Link>
                        </div>
                        <div className="formControl">
                            <button className="login">登陆</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login