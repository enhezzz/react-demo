import React, { Component } from 'react';
import './App.css';
import ReactDom from 'react-dom'
class App extends Component {
  constructor(props){
    super(props);
    this.focus = this.focus.bind(this);
    this.text = React.createRef();
  }
  focus(e){
    e.stopPropagation();
    e.preventDefault();
    // ReactDom.findDOMNode(this.refs.text).focus();
    this.text.current.focus();
  }
  render() {
    return (
      <div className="App">
        {/* <input type="text" ref="text"/> */}
        <input type="text" ref={this.text}/>
        <button onClick={this.focus}>点我聚焦到输入框</button>
      </div>
    );
  }
}

export default App;
