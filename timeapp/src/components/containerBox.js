import React from 'react';

const Box = props=>{
    return(
        <div className='box-container'>
            <div className='box'>
            {props.children}
            </div>
            
        </div>
    );
};

export default Box;