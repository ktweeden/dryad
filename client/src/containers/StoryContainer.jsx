import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StoryTitle from '../components/StoryTitle.jsx'
import StorySection from '../components/StorySection.jsx'
import AddSectionForm from '../components/AddSectionForm.jsx'
import './StoryContainer.css'

class StoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            storyId: '',
            storySections: []
        }

        this.handleAddSectionSubmit = this.handleAddSectionSubmit.bind(this)
    }


    render() {
        const sectionNodes = this.state.storySections.map((section, index) => {
            return <StorySection 
            section={this.state.storySections[index]} 
            key={index}
            />
        })
        return (
            <section className="story-container">
                <StoryTitle title={this.state.title} />
                <div>
                    {sectionNodes}
                </div>
                <AddSectionForm handleFormSubmit={this.handleAddSectionSubmit} />
            </section>
        )
    }

    componentDidMount() {
        const storyRequest = new Request('http://localhost:3001/story')
        storyRequest.get(storyResponse => {
            const story = storyResponse[0]
            this.setState({ title: story.title, storyId: story._id})
            const sectionsRequest = new Request(`http://localhost:3001/story/${story._id}/sections`)
            sectionsRequest.get(sectionsResponse => this.setState({storySections: sectionsResponse}))
        })
    }

    handleAddSectionSubmit(storyText) {
        const newSection = {
            story: this.state.storyId,
            depth: this.state.storySections.length+1,
            text: storyText
        }
        const addSectionRequest = new Request('http://localhost:3001/story_section')
        addSectionRequest.post(newSection, (section) => {
            console.log('new section is', newSection)
            const updatedSections = [...this.state.storySections, section]
            this.setState({storySections: updatedSections})
        })
    }
}

export default StoryContainer