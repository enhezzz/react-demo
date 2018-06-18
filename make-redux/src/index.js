import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}
function stateChanger(state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}
function createStore(state, stateChanger) {
  const getState = () => state;
  let observers = [];
  const subscribe = (observer) => {      //订阅某个观察者
    observers.push(observer);
  }
  const dispatch = (action) => {
    state = stateChanger(state, action);
    observers.forEach(observer => {    //改变状态时对观察者做出响应
      observer();
    })
  }
  return { getState, dispatch, subscribe }
}
//   function dispatch (action) {
//     switch (action.type) {
//       case 'UPDATE_TITLE_TEXT':
//         appState.title.text = action.text
//         break
//       case 'UPDATE_TITLE_COLOR':
//         appState.title.color = action.color
//         break
//       default:
//         break
//     }
//   }

function renderApp(newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return // 数据没有变化就不渲染了
  console.log('renderApp')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
  console.log('renderTitle')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) return // 数据没有变化就不渲染了
  console.log('renderContent')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

const store = createStore(appState, stateChanger);
let oldState = store.getState() // 缓存旧的 state
store.subscribe(() => {
  const newState = store.getState() // 数据可能变化，获取新的 state
  renderApp(newState, oldState) // 把新旧的 state 传进去渲染
  oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})
renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// renderApp(store.getState()) // 把新的数据渲染到页面上
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
