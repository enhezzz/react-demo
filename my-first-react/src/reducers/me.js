import {UPDATE_ME} from "../actions";

const reducer = (state='/login',action)=>{
    switch (action.type){
        case UPDATE_ME:
            return action.url
        default:
            return state
    }
}
export default reducer