import React from 'react';
import {Link} from 'react-router-dom';
import Googleauth from './Googleauth';


const Header=()=>{

    return (<div className="ui secondary pointing menu">
        <Link to="/" className="item">Streamers</Link>
        <div className="right menu">
            <Link to="/" className="item">All Streams</Link>
            <Googleauth />
        </div>
    </div>)
};
export default Header;