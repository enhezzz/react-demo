import {ADD_ACTICLE} from "../actions";

export default (state=[],action)=>{
    switch (action.type){
        case ADD_ACTICLE:
            return state.concat(action.article)
        default:
            return state
    }
}