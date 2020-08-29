import React from 'react';
import  './success.css';

const success = (props) => {
    return(
        <div>
        <h2 > {props.status} </h2>
        <p>{props.children}</p>

    </div>

    );
    
}

export default success;