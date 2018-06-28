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
import store from './src/store/index'
import Me from './src/components/me'
const root = document.querySelector('.root');

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