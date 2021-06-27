import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const Convert=({language,text})=>{
    const [val,Setval]=useState('');
    const [debText,SetdebText]=useState(text);
    
    useEffect(()=>{

        const timerid=setTimeout(()=>{
                SetdebText(text);
        },500);

        return ()=>{
            clearTimeout(timerid);
        }
    },[text])
    useEffect(()=>{
        const translateValue=async ()=>{
            const data=await Axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:debText,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        });
        
        Setval(data.data.data.translations[0].translatedText);
        }
        translateValue();

    },[debText,language]);

    return(
        <div>{val}</div>
    );
};

export default Convert;