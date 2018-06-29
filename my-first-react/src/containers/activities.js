import React,{Component} from 'react'
import Activities from '../components/activities'
import {connect} from 'react-redux'
class ActivitiesContainer extends Component{
    render(){
        return (
            <Activities {...this.props}></Activities>
        )
    }
}
function mapStateToProp(state){
    return {
        articles: state.articles
    }
}
export default connect(mapStateToProp)(ActivitiesContainer)