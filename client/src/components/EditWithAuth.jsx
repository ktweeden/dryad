import React from 'react'
import Button from './Button.jsx'
import AddSectionForm from './AddSectionForm.jsx'

const EditWithAuth = function (props) {
  return (
    props.edit ?
      <AddSectionForm handleFormSubmit={props.handleFormSubmit} /> :
      <p className="start-editing">Don't like the sound of the previews?&nbsp;
        <Button buttonText={`Add to ${props.title}`} onButtonClick={props.onButtonClick} />
      </p>
  )
}

export default EditWithAuth