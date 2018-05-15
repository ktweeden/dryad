import React from 'react'
import './StoryTitle.css'

const StoryTitle = function(props) {
    return (
        <h2 className="story-title">{props.title}</h2>
    )
}

export default StoryTitle