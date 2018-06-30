import React,{Component} from 'react'
import Footer from './containers/footer'
import './style/app.scss'
import { hot } from 'react-hot-loader'
class App extends Component{
    render(){
        return (
        <div>
            <div className="responsive">
                {this.props.children}
            </div>
            <Footer/>
        </div>
        
    )
    }
}
export default hot(module)(App)