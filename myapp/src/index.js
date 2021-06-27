import React from 'react';
import Reactdom from 'react-dom';
import faker from 'faker';
import CommentDetail from'./CommentDetail';
import AcceptCard from './AcceptCard';


const App=()=>{
    return (
        <div className="container">
        <AcceptCard >
            <CommentDetail author="Sam" timeago="Today at 6"  images={faker.image.avatar()}/>
        </AcceptCard>
        <AcceptCard >
            <CommentDetail author="Rajat" timeago="Tomm at 6"  images={faker.image.avatar()}/>
            </AcceptCard>
        <AcceptCard >
            <CommentDetail author="Paras" timeago="Yest at 6" images={faker.image.avatar()}/>
        </AcceptCard>
        </div>
    );
}
Reactdom.render(<App />,document.querySelector("#root"));