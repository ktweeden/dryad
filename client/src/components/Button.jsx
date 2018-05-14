import React from 'react'
import './Button.css'

const Button = function(props) {
    return (
        <button value={props.value} onClick={props.onButtonClick}>{props.buttonText}</button>
    )
}

export default Button