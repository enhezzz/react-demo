import {combineReducers} from 'redux'
import userReducer from './user'
import meReducer from './me'
import articleReducer from './articles'
const reducer = combineReducers({
    user: userReducer,
    me: meReducer,
    articles: articleReducer,
    logo: ''
})
export default reducer