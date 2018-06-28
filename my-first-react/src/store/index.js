import {createStore} from 'redux'
import reducer from '../reducers/index'
import {session} from "../controler/request";
session().then(initState=>{
    console.log(initState)
})
export default createStore(reducer,initState)