import React from 'react'
import './SectionActionBar.css'

const SectionActionBar = function(props) {
    return (
        <div className="action-bar">
            <p>@{props.username}</p>
        </div>
    )
}

export default SectionActionBar