import React, { useState, useEffect, useRef } from 'react';

const Dropdown=(props)=>{

     const [open,setOpen]=useState(false);
    const ref=useRef();

    useEffect(()=>{
        const onBodyClick=(event)=>{
            if(ref.current.contains(event.target)){
                return;
        }
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick);

        return ()=>{
            document.body.removeEventListener('click',onBodyClick);
        }
    }
    ,[]);

    const values=props.option.map(opt=>{
        if(opt.value===props.selected.value)
                return null;
        return(
            
            <div key={opt.value}
             className="item"
             onClick={()=>props.onSelectChange(opt)}
            >
                {opt.label}
                 </div>
        ); 
        }
        );

    return(
        <div ref={ref} className="ui form container">
            <div className="field">
                <label className="label">{props.label}</label>
                <div onClick={()=>setOpen(!open)}
                 className={`ui selection dropdown ${open ?'visible active':''}`}>
                    <i className="dropdown icon" />
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>{values}</div>
                </div>
            </div>
        </div>
    );

    }
export default Dropdown;