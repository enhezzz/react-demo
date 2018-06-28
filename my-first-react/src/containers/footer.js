import React,{Component} from 'react'
import Footer from '../components/footer'
import {connect} from 'react-redux'
function mapStateToProp(state){
    return {
        url: state.me
    }
}
export default connect(mapStateToProp)(Footer)