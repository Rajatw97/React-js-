import React, { useState } from 'react';
import Acc from './Accordion';
import SearchBar from './SeachBar';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';


const object=[
    {
        title:'React',
        description:'Popular js lib'
    },
    {
        title:'Angular',
        description:' Most used js lib'
    },
    {
        title:'JS',
        description:'Simple js lib'
    }

]

const dropdownOptions=[
  {
    label:'Red',
    value:'red'
  },
  {
   label:'Blue',
   value:'blue'
  },
  {
      label:'Green',
      value:'green'
  }

]
    {/* <Acc items={object}/> */}
        {/* <SearchBar /> */}
        {/* <button onClick={()=>setShow(!show)}>Toggle the Dropdown</button>
        {show ?
        <Dropdown 
        label="Select a color"
        option={dropdownOptions}
        selected={selected}
        onSelectChange={setSelected} />
        :null
        } */}
        {/* <Translate /> */}


const App=()=>{
         const [selected,setSelected]=useState(dropdownOptions[0]);
        // const [show,setShow]=useState(true);
    return(<div>
            <Header />
             <Route path="/">
                <Acc items={object} />
             </Route>
             <Route path="/dropdown">
                 <Dropdown 
                    label="Select a color"
                    option={dropdownOptions}
                    selected={selected}
                    onSelectChange={setSelected}
                />
            </Route>
            <Route path="/search">
                <SearchBar />
            </Route>
            <Route path="/translate">
                <Translate />
             </Route>
        </div>)
}



export default App;