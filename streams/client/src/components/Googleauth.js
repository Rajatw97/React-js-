import React from 'react';
import {connect} from 'react-redux';
import {SignIn,SignOut} from '../actions';

class Googleauth extends React.Component{

    // state={isSignedIn:null};

    componentDidMount(){

        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"666290415316-le1q721qgpba548ptpfm71uieottraii.apps.googleusercontent.com",
                scope:'email'
                }).then(()=>{
                    this.auth=window.gapi.auth2.getAuthInstance();

                    // this.setState({isSignedIn:this.auth.isSignedIn.get()});
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                })
        });
    };

    onAuthChange=(isSignedIn)=>{
            if(isSignedIn){
                this.props.SignIn(this.auth.currentUser.get().getId());
            }else{console.log(this.props);
                this.props.SignOut();
            }
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
    };

    renderAuthButton=()=>{

        // this.state.isSignedIn

       if(this.props.isSignedIn === null){
           return null;
       }else if(this.props.isSignedIn===true){
           return(<div className="ui red google button mini" onClick={(e)=>window.gapi.auth2.getAuthInstance().signOut()}><i className="google icon"></i>Sign out</div>)
       }else 
       return(<div className="ui red google button mini" onClick={(e)=>window.gapi.auth2.getAuthInstance().signIn()}><i className="google icon"></i>Sign in</div>);
    };

    render(){
        return(<div>
           {this.renderAuthButton()}
            </div>);
    };
};

const mapStateToProps=(state)=>{
   return { isSignedIn:state.auth.isSignedIn }
    
};
export default connect(mapStateToProps,{SignIn,SignOut}) (Googleauth);