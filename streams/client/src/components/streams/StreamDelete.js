import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import {fetchStream,deleteStream} from '../../actions';
import {Link} from 'react-router-dom';


class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    };

    renderAction=()=>{
        return(
            <React.Fragment>
                 <button  onClick={()=>this.props.deleteStream(this.props.match.params.id)}className="ui mini negative button">Delete</button>
                 <Link to="/" className="ui mini primary button" >Cancel</Link>
                   </React.Fragment>);
    };

   render(){
       if(!this.props.stream)
        return (<div>Loading...</div>)
       return (<div>
        <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete the stream with title: ${this.props.stream.title} ? `}
        actions={this.renderAction()}
        onDismiss={()=>history.push('/')} />
    </div>);
   }

}
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps,{fetchStream,deleteStream}) (StreamDelete);