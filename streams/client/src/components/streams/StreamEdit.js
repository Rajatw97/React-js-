import React from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import {fetchStream} from '../../actions';
import {editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
  
  componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
  };
  onSubmit=(formValues)=>{
      console.log(formValues);
      console.log(this.props);
       this.props.editStream(this.props.match.params.id,formValues);
  };
    render(){
         if(!this.props.stream){
             return(<div>Loading...</div>);
         }
        // return (<div>{this.props.stream.title}</div>);
        return(<div>
            <h3>Edit a Stream</h3>
            <StreamForm  initialValues={{title:this.props.stream.title,description:this.props.stream.description}}
             onSubmit={this.onSubmit} />
        </div>)

  }

}

// ownProps is used to fetch props fro component itself and props valu were there coze comp was rendered in a <Route> 
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);