import React from 'react';
import './Button.css';

function NumberButton (props){
    return <button className = {`number_button ${props.ops}`} > {props.text} </button>
}

export default NumberButton;