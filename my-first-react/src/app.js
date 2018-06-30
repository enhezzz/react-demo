import React,{Component} from 'react'
import Footer from './containers/footer'
import './style/app.scss'
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
export default App