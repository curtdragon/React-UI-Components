import React from 'react';
import './Button.css';

function ActionButton (props){
    return <button className= {`action_button ${props.weight}`}>{props.text}</button>
}

export default ActionButton;