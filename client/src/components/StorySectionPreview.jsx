import React from 'react'

const StorySectionPreview = function(props) {
  return (
    <div className="section-preview">
      <p>{props.section.text.slice(0, 50)}...</p>
    </div>
  )
}

export default StorySectionPreview