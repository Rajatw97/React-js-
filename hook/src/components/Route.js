import {useEffect, useState} from 'react';

const Route=({path,children})=>{
    const [pathchng,setPathchng]=useState(window.location.pathname);

    

     useEffect(()=>{
        const LocChanged=()=>{
            console.log("loc chngd");
            setPathchng(window.location.pathname);
        }
        window.addEventListener('popstate',LocChanged);
         return ()=>{
             window.removeEventListener('popstate',LocChanged);
         };
     },[]);

return pathchng===path?children:null;
}
export default Route;