import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    
    state= {img:[]};

     onSearchSubmit= async (term)=>{
       
        const response=await axios.get('https://reqres.in/api/users',
        {params:{query:term}});
        // This . then func is old syntax and lengthy one, now we use async await
        // .then((response)=>{console.log(response.data.data)});
        this.setState({img: response.data.data});
         console.log(this.state.img);
    };
    render(){
        return(<div className="ui container"  style={{marginTop:'10px'}}>
            <SearchBar onSubmitcall={this.onSearchSubmit} />
            <ImageList images={this.state.img}/>
            </div>);
}
};

export default App;