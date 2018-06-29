export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_ME = 'UPDATE_ME';
export const ADD_ACTICLE = 'ADD_ARTICLE'
export const updateUser = (user)=>{
    return {
        type: UPDATE_USER,
        user: user
    }
}
export const updateMe = (url)=>{
    return {
        type: UPDATE_ME,
        url
    }
}
export const addArticle = (article)=>{
    return {
        type: ADD_ACTICLE,
        article
    }
}