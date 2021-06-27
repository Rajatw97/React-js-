import React from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    };  

    renderAdmin=(stream)=>{
        if(this.props.currentUser===stream.userId){
            return (<div className="content right floated" style={{marginTop:'5px'}}>
                <Link to={`/streams/edit/${stream.id}`} className="ui mini button primary">Edit</Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui mini button negative">Delete</Link>
            </div>)
        }
    }

    renderComp=()=>{
        return this.props.streams.map(str=>{
            return(
                <div className="item" key={str.id}>
                     {this.renderAdmin(str)}
                    <i className="large middle aligned icon camera"></i>
                    <div className='content'>
                        <Link to={`/streams/${str.id}`} className="header">{str.title}</Link>
                    </div>
                    <div className='description'>{str.description}</div>
                </div>
            );
        })

    }

    checkForSignIn=()=>{

        if(this.props.isSignIn===true){
            return(<div className="content" style={{float:'right',marginTop:'10px'}}>
                <Link to="/streams/new" className="ui button primary">Create Stream</Link>
            </div>)
        }
    };

  render(){  return (<div>
      <h2>Streams</h2>
      <div className="ui celled list">
      {this.renderComp()}
      {this.checkForSignIn()}</div>
      </div>);
  }

}

const mapStatetoProps=(state)=>{
    return {streams:Object.values(state.streams),
            currentUser:state.auth.userId,
            isSignIn:state.auth.isSignedIn};
};

export default connect(mapStatetoProps,{fetchStreams})(StreamList);