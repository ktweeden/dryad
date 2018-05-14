import React from 'react'
import SectionActionBar from './SectionActionBar.jsx'
import './StorySection.css'


const StorySection = function(props) {
    return (
        <div className="section-container">
            <p>{props.section.text}</p>
            <SectionActionBar onForkClick={props.handleForkButtonClick} index={props.section.depth}/>
        </div>
    )
}

export default StorySection