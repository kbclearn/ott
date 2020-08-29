import React from 'react';

import './Post.css';

const post = (props) => {
    let s = null;
        s =( 
            <article className="Post">
        <h1>{props.tittle}</h1>
        <div className="Info" >
            <div className="Author"><a href={props.city}>{props.city}</a></div> 
            <div className="Author"><a href={props.address}> {props.address} </a></div>
            <div className="Author">{props.tittle}</div>
        </div>
    </article>
        );
    
return (
    <div>
        {s}
    </div>
);
}
export default post;