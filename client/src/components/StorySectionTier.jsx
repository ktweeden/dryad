import React from 'react'
import StorySection from './StorySection.jsx'
import StorySectionPreview from './StorySectionPreview.jsx'

const StorySectionTier = function(props) {  
  const sectionNodes = props.sectionArray.map(section => {
    if(section.active) {
      return <StorySection section={section} />
    }
    else {
      return <StorySectionPreview section={section} />
    }
  })

  return (
    <div className="story-section-tier">
      {sectionNodes}
    </div>
  )
}

export default StorySectionTier