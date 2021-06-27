import React ,{useState} from 'react';

const Accordion =({items})=>{

    const [activeIndex,setActiveIndex]=useState(null);

    const onTitleClick=(index)=>{
        setActiveIndex(index)
       
    }
   
    const rendereditems=items.map((item,index)=>{
        const active= index===activeIndex?'active':'';
        return(
            
                <React.Fragment  key={item.title}>
                    <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.description}</p>
                    </div>

                </React.Fragment>

        );
    })

    return( 
    <div className="ui styled accordion">{rendereditems}
        {activeIndex}
    </div>)
}

export default Accordion;