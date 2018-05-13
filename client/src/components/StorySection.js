import React, {Component} from 'react'


const StorySection = function(props) {
    console.log(props)
    return (
        <div>
            <p>{props.section.text}</p>
        </div>
    )
}

export default StorySection