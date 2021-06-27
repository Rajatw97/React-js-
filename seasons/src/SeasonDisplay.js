import './SeasonDisplay.css';
import React from'react';



const seasonconfig={

    summer:{
        text:"Lets hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:"Its chilli",
        iconName:'snowflake'
    }
};
const getSeason=(lat,month)=>{

    if(month>2&& month<8)
        return lat>0?"summer":"winter";
    else
        return lat>0?"winter":"summer";    
};
const SeasonDisplay=(props)=>{
    const season= getSeason(props.lat,new Date().getMonth());
   
    // Bad way 
    // const text= season==='summer'?'Lets hit the beach!':'Its chilli';
    // const icon=season==='summer'?'sun':'snowflake';
    //Better way is to define a config object include prop there and call like here
   const {text,iconName}= seasonconfig[season];
    return(
        
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;