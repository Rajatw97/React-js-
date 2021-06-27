import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const Acceptcard=(props)=>{
    return(
        <div className="ui card">
        <div className="content">
               {props.children}
        </div>
        <div className="otherContent">
        <div className="ui basic green button">Accept</div>
        <div className="ui basic red button">Reject</div>
        </div>
        </div>
    );
};
export default Acceptcard;