import React,{useState,useEffect} from 'react';
import Axios from 'axios';


const SearchBar =()=>{
    const [term,setTerm]=useState('');
    const [result,setResult]=useState([]);
  
    const rendereditems=result.map((res)=>{
      
        return(
               <div  className="item" key={res.pageid}>
                   <div className="right floated content">
                       <a className="ui button"
                       href={`https://en.wikipedia.org?curid=${res.pageid}`} >Go</a>
                   </div>
                    <div className="content" >
                        <div className="header">
                        {res.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html:res.snippet}}></span>
                    </div>
                </div>
        );
    })

    useEffect(()=>{
            const search= async ()=>{
                  const data= await Axios.get("https://en.wikipedia.org/w/api.php",{
                       params:{
                           action:'query',
                           list:'search',
                           origin:'*',
                           format:'json',
                           srsearch:term
                       }
                   });
                  setResult(data.data.query.search);
  }
        if(term && !result.length)
                search();
        else{        
            const timeoutid= setTimeout(()=>{
                if(term)
                {
                    search();
                }
            },1000);
            return ()=>{
                clearTimeout(timeoutid);
            }
           
            }               
    },[term]);

    
        
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term:</label>
                    <input className="input" value={term} onChange={e=>setTerm(e.target.value)}></input>
                </div>
               
            </div>
            <div className="ui celled list">{rendereditems}</div>
        </div>
    )
};

export default SearchBar;