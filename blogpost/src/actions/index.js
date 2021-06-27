import axios from 'axios';

//to reduce the netwoks calls:1.)memoization but have some limittations so better approcach is this one
export const fetchUserandPost=()=>{

    return async function(dispatch,getState){
        await dispatch(fetchPost());
        // can also use the memoize func here
         const uniqueIds = [...new Set((getState().postlist.map(item => item.userId)))];
        uniqueIds.forEach(id=>dispatch(fetchUser(id)));
        
    }
}

//this is middleware(redux-thunk) , we ise async await but cant use directly so we used middleware so we can ret a func now and use async await there
export const fetchPost=()=>{

    return async function(dispatch,getState){
        const res=await result().get('/posts');
         dispatch({type:"FETCH_POSTS",
            payload:res.data});
    }
};

export const fetchUser=id=>{
    return async function(dispatch,getState){
        const res=await result().get(`/users/${id}`);
        dispatch({type:"FETCH_USER",
        payload:res.data});
    }

}

const result=()=>{
   return(axios.create({
        baseURL:"https://jsonplaceholder.typicode.com"
    }));
} 