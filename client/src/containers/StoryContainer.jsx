import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StoryTitle from '../components/StoryTitle.jsx'
import StorySection from '../components/StorySection.jsx'
import AddSectionForm from '../components/AddSectionForm.jsx'
import StorySectionTier from '../components/StorySectionTier.jsx'
import './StoryContainer.css'

class StoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            storyId: '',
            startingSection: {},
            storySections: {},
            currentSection: '',
            edit: false,
            sectionsToRender: []
        }

        this.handleAddSectionSubmit = this.handleAddSectionSubmit.bind(this)
        this.handleForkButtonClick = this.handleForkButtonClick.bind(this)
        this.handlePreviewClick = this.handlePreviewClick.bind(this)
    }


    render() {
        const {
            storySections, 
            startingSection,
            edit,
            currentSection,
            sectionsToRender
        } = this.state

        const sectionNodes = sectionsToRender.map(section => {
            return <StorySection section={section}/>
        })

        return (
            <section className="story-container">
                <StoryTitle title={this.state.title} />
                <StorySection section={startingSection}/>
                {sectionNodes}
                {storySections[currentSection] && <StorySectionTier 
                sectionArray={storySections[currentSection]} 
                handlePreviewClick={this.handlePreviewClick}
                updateCurrentSection={this.updateCurrentSection}
                />}
                {edit && <AddSectionForm handleFormSubmit={this.handleAddSectionSubmit} />}
            </section>
        )
    }

    componentDidMount() {
        const storyRequest = new Request('http://localhost:3001/story/5af836d8727a8a89b6efe8a1')
        storyRequest.get(story => {
            this.setState({ 
                title: story.title, 
                storyId: story._id, 
                startingSection: story.startingSection,
                currentSection: story.startingSection._id
            })
            const sectionsRequest = new Request(`http://localhost:3001/story/${story._id}/sections`)
            sectionsRequest.get(sectionsResponse => this.setState({storySections: sectionsResponse}))
        })
    }

    handleAddSectionSubmit(storyText) {
        const previousSectionId = this.state.storySections[this.state.storySections.length -1]._id
        const newSection = {
            story: this.state.storyId,
            previousSection: previousSectionId,
            depth: this.state.storySections.length,
            text: storyText
        }
        const addSectionRequest = new Request('http://localhost:3001/story_section')
        addSectionRequest.post(newSection, (section) => {
            console.log('new section is', newSection)
            const updatedSections = [...this.state.storySections, section]
            this.setState({storySections: updatedSections})
        })
    }

    handleForkButtonClick(event) {
        const index = 1 + Number(event.target.value)
        const newSectionArray = [...this.state.storySections].splice(0, index)
        this.setState({storySections: newSectionArray})
    }

    handlePreviewClick(key, arrayIndex) {
        const section = this.state.storySections[key][arrayIndex]
        const updatedSectionsToRender = [...this.state.sectionsToRender, section]
        this.setState({
            sectionsToRender: updatedSectionsToRender,
            currentSection: section._id
        })
    }
}

export default StoryContainer