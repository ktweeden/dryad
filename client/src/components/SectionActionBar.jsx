import React from 'react'
import Button from './Button.jsx'
import './SectionActionBar.css'

const SectionActionBar = function(props) {
    return (
        <div className="action-bar">
            <p>@{props.username}</p>
        </div>
    )
}

export default SectionActionBar