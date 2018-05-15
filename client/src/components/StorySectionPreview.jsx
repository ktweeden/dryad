import React, {Component} from 'react'
import './StorySectionPreview.css'

class StorySectionPreview extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className="section-preview" onClick={this.handleClick}>
        <p>{this.props.section.text.slice(0, 50)}...</p>
      </div>
    )
  }

  handleClick() {
    this.props.handlePreviewClick(this.props.section.previousSection, this.props.index)
  }
}


export default StorySectionPreview