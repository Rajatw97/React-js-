import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';



const translateOption=[
    {
     label:'Afrikaan',
     value:'af'
    }, 
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
];

const Translate=()=>{
        const [text,setText]=useState("")
        const [language,setLanguage]=useState(translateOption[0]);
        return(
            <div>
                <div className="ui form ui container">
                    <div className="field">
                    <label>Enter text:</label>
                <input value={text} onChange={(e)=>setText(e.target.value)} />
                <Dropdown label="Select a language" option={translateOption} selected={language} onSelectChange={setLanguage} />
                </div>
                <hr />
                <h3 className="ui header">Output</h3>
                <Convert text={text} language={language} />

                </div>
            </div>
        );
    };

export default Translate;