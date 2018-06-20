import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/CommentApp';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentsReducer from './reducers/comments'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(commentsReducer)
ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>
    , document.getElementById('root'));
registerServiceWorker();
