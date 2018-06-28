import {UPDATE_USER} from '../actions/index'
const reducer = (state={},action)=>{
    switch (action.type){
        case UPDATE_USER:
            return action.user
        default:
            return state
    }
}
export default reducer