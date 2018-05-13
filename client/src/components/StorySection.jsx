import React from 'react'
import './StorySection.css'


const StorySection = function(props) {
    return (
        <div className="section-container">
            <p>{props.section.text}</p>
        </div>
    )
}

export default StorySection