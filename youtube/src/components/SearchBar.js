import React from 'react';

class SearchBar extends React.Component{
state={term:''};

onInputChange=(event)=>{
    event.preventDefault();
    
console.log(this.state.term);
}
render(){
    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onInputChange}>
                <div className="field">
                    <label>Enter Text:</label>
                    <input type="text" value={this.state.term} onChange={e=>this.setState({term:e.target.value})}></input>
                </div>
            </form>
        </div>
    );
};

};

export default SearchBar;