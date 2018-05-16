import React from 'react'
import StorySectionPreview from './StorySectionPreview.jsx'
import './StorySectionTier.css'

const StorySectionTier = function(props) {
    const sectionNodes = props.sectionArray.map((section, index) => {
      return <StorySectionPreview
        handlePreviewClick={props.handlePreviewClick}
        section={section}
        key={section._id}
        index={index} />
    })
    return (
      <div className="story-section-tier">
        {sectionNodes}
      </div>
    )
}

export default StorySectionTier