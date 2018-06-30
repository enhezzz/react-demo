import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './src/app';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './src/js/flexiable'
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import Login from './src/containers/login'
import Register from './src/containers/register'
// import store from './src/store/index'
import Me from './src/containers/me'
import Article from './src/containers/article'
import Activities from './src/containers/activities'
import Index from './src/components/indexRouter'
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
                        <IndexRoute component={Index}></IndexRoute>
                        <Route path="login" component={Login}> </Route>
                        <Route path="register" component={Register}></Route>
                        <Route path="me" component={Me}></Route>
                        <Route path="article" component={Article}></Route>
                        <Route path="activities" component={Activities}></Route>
                    </Route>
                </Router>
            </Provider>
        )
        ,root)
})
