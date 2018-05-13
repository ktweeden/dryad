import React, {Component} from 'react'

const AddSectionForm = function(props) {
    return (
        <form>
            <textarea cols="50" rows= "10"/>
            <input type="hidden" value={props.storyId}/>
            <input type="submit" value="Add to story" />
        </form>
    )
}

export default AddSectionForm