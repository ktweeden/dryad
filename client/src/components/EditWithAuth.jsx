import React from 'react'
import Button from './Button.jsx'
import AddSectionForm from './AddSectionForm.jsx'

const EditWithAuth = function (props) {
  return (
    this.state.edit ?
      <AddSectionForm handleFormSubmit={props.handleAddSectionSubmit} /> :
      <p className="start-editing">Don't like the sound of the previews?
                <Button buttonText={`Add to ${props.title}`}
          onButtonClick={props.handleBeginEditClick} />
      </p>
  )
}

export default EditWithAuth