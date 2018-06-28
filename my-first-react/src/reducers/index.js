import {combineReducers} from 'redux'
import userReducer from './user'
import meReducer from './me'
const reducer = combineReducers({
    user: userReducer,
    me: meReducer
})
export default reducer