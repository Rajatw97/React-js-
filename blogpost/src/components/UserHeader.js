import React from 'react';
import {fetchUser} from '../actions';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
// Dont need this as now e have 1 action creator 
    
    // componentDidMount(){
    //     this.props.fetchUser(this.props.id);
    // }

    render(){
      
          const user1=this.props.user.find((obj)=>obj.id===this.props.id);
        if(!user1)
             return null;
        return(<div>{user1.name}</div>);
    }
};

const mapStateToProps=(state)=>{
    return {user:state.user};
}

export default connect(mapStateToProps)(UserHeader);
    // ,{fetchUser}
    