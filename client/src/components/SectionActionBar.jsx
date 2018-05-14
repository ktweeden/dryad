import React from 'react'
import Button from './Button.jsx'
import './SectionActionBar.css'

const SectionActionBar = function(props) {
    return (
        <div className="action-bar">
            <Button value={props.index} onButtonClick={props.onForkClick} buttonText="Fork"/>
        </div>
    )
}

export default SectionActionBar