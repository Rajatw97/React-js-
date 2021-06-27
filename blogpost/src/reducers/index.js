import {combineReducers} from 'redux';

const PostList=(state=[],action)=>{
    if(action.type === 'FETCH_POSTS')
        return action.payload;

    return state;    
}

const UserName=(state=[],action)=>{
    if(action.type === 'FETCH_USER')
        return [...state,action.payload];

    return state;    
}


export default combineReducers({
   postlist:PostList,
   user:UserName
});