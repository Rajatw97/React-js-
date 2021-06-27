import React from 'react';
import './ImageList.css';
const ImageList=props=>{

   const images=props.images.map((img)=>{
       return <img key={img.id} src={img.avatar} />
   })
    return (
        <div className="img-list">{images}</div>
    );
}

export default ImageList;