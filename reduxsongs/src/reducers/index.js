import React from 'react';
import {combineReducers} from 'redux';


const songReducer=()=>{
return[
    {title:'The Nights',duration:'3:05'},
     {title:'Wake me up',duration:'3:30'},
      {title:'Perfect',duration:'4:02'},
       {title:'Ibizza',duration:'3;05'}];
};

const songSelectedReducer=(selectedsong=null,action)=>{
    if(action.type==='SONG_SELECTED')
     {   return action.payload; }

     return selectedsong;

};

export default combineReducers({
    songs:songReducer,
    selectedSong:songSelectedReducer
});