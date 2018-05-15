import React, {Component} from 'react'
import SectionActionBar from './SectionActionBar.jsx'
import './StorySection.css'


class StorySection extends Component {
    constructor(props) {
        super(props)

        this.onSectionClick = this.onSectionClick.bind(this)
    }

    render() {
        return (
            <div className="section-container" onClick={this.onSectionClick}>
                <p>{this.props.section.text}</p>
                {/* {props.handleForkButtonClick && <SectionActionBar onForkClick={this.props.handleForkButtonClick} index={props.section.depth}/>} */}
            </div>
        )
    }

    onSectionClick() {
        console.log('click');
        this.props.handleSectionClick(this.props.section)
    }
}

export default StorySection