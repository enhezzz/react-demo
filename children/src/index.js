import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App>
    <span>i </span>
    <span>am </span>
    <span>a </span>
    <span>child</span>
</App>, document.getElementById('root'));
registerServiceWorker();
