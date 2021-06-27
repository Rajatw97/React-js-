import React from 'react';

const Link=({className,href,children})=>{
    const onClick=(event)=>{
        if(event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({},'',href);
        const newevent=new PopStateEvent('popstate');
        window.dispatchEvent(newevent);
  }


    return(
        <a onClick={onClick} href={href} className={className}>{children}</a>
    );

}
export default Link;