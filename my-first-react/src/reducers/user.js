import {UPDATE_USER, UPDATE_AVATAR} from '../actions/index'


const reducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                ...(action.user)
            }
        case UPDATE_AVATAR:
            return {
                ...state,
                avatarPath: action.avatarPath
            }
        default:
            return state
    }
}
export default reducer