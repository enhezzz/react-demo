import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content'
import PropTypes from 'prop-types'
function createStore(reducer) {
  let state = null,
    oldState = {                //把旧有状态放到store里保存
      themeColor: 'red'
    };
  const getState = () => state;
  let observers = [];
  const subscribe = (observer) => {      //订阅某个观察者
    observers.push(observer);
  }
  const dispatch = (action) => {
    state = reducer(state, action);
    observers.forEach(observer => {    //改变状态时对观察者做出响应
      observer();
    })
  }
  function getOldState() {            //获取旧有状态
    return oldState;
  }
  function updateOldState(state) {    //更新旧有状态
    oldState = state
  }
  dispatch({});
  return { getState, dispatch, subscribe, getOldState, updateOldState }
}
const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}
const store = createStore(themeReducer);
class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return { store }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App;
