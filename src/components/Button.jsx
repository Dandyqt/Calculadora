import React from 'react';
import './Button.css';

export default props => {
    
   
    return (
    <button 
    
        onClick = {e => props.click(props.label)}
        className={`button ${props.className}`}>
        {props.label}
    </button>
    )
}