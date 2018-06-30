import {ADD_ACTICLE} from "../actions";

export default (state=[],action)=>{
    switch (action.type){
        case ADD_ACTICLE:
            state.unshift(action.article);
            return [...state]
        default:
            return state
    }
}