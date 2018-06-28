import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './src/app';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './src/js/flexiable'
import { Router, Route, browserHistory } from 'react-router';
import Login from './src/containers/login'
import Register from './src/containers/register'
// import store from './src/store/index'
import Me from './src/containers/me'
const root = document.querySelector('.root');
import reducer from './src/reducers/index'
import {session} from "./src/controler/request";
let store = null;
session().then(initState=>{
    store = createStore(reducer,initState)
    ReactDOM.render((
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="login" component={Login}> </Route>
                        <Route path="register" component={Register}></Route>
                        <Router path="me" component={Me}></Router>
                    </Route>
                </Router>
            </Provider>
        )
        ,root)
})
