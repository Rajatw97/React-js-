import React from 'react';
import Reactdom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// 1st approach -- const App=()=>{
//     const loc=window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//     );
//     console.log(loc);

//     return <div>hi</div>;
// };

//2nd apprach using class and state prop with just const,render func
class App extends React.Component{

    constructor(props){
        super(props);
        // this.state={lat:null,errMsg:''};
        // window.navigator.geolocation.getCurrentPosition(
        //     (position)=>this.setState({lat:position.coords.latitude}),
        //     (err)=>this.setState({errMsg:err.message})
        // );
    }
    //Alternate way to define state
    state={lat:null,errMsg:''};


    //3rd approach to use lifecycle method
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
                 (position)=>this.setState({lat:position.coords.latitude}),
                 (err)=>this.setState({errMsg:err.message})
             );
    }
    renderComponent(){
        if(this.state.lat && !this.state.errMsg)
        return <SeasonDisplay lat={this.state.lat} />
        if(!this.state.lat && this.state.errMsg)
        return <div>Error:{this.state.errMsg}</div>
        // return <div>Error:{this.state.errMsg}</div>;
         return <Spinner message="Pls Allow the req location" />;
    }
    render(){
        // Avoid cond in render , create helper func to apply prop to all divs
        // if(this.state.lat && !this.state.errMsg)
        // return <SeasonDisplay lat={this.state.lat} />
        // if(!this.state.lat && this.state.errMsg)
        // return <div>Error:{this.state.errMsg}</div>
        // // return <div>Error:{this.state.errMsg}</div>;
        // return <Spinner message="Pls Allow the req location" />;
        return(
        <div className="border red">{this.renderComponent()}</div>
        );
};
}

Reactdom.render(<App />,document.querySelector("#root"));