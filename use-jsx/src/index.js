import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
var arr = [
    'Hello world!',
    'React is awesome',
];
ReactDOM.render(<div className="App">
    {
        arr.map((ele, index) => {
            return <h1 key={index}>{ele}</h1>
        })
    }
</div>, document.getElementById('root'));
registerServiceWorker();
