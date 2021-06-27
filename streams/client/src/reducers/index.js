import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import streamReducer from '../reducers/streamReducer';

const SignReducer=(state={isSignedIn:null,userId:null},action)=>{

    switch(action.type){

        case 'SIGN_IN':
            return {...state,isSignedIn:true,userId:action.payload};
        case 'SIGN_OUT':
            return {...state,isSignedIn:false,userId:null};
        default:
            return state;
    };
};



export default combineReducers({
   auth:SignReducer,
   form:formReducer,
   streams:streamReducer
});