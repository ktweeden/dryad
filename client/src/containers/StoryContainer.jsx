import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StoryTitle from '../components/StoryTitle.jsx'
import StorySection from '../components/StorySection.jsx'
import AddSectionForm from '../components/AddSectionForm.jsx'
import Button from '../components/Button.jsx'
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
        this.handleBeginEditClick = this.handleBeginEditClick.bind(this)
    }


    render() {
        const {
            title,
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
                <StoryTitle title={title} />
                <StorySection section={startingSection}/>
                {sectionNodes}
                {(!edit && storySections[currentSection]) && <StorySectionTier 
                sectionArray={storySections[currentSection]} 
                handlePreviewClick={this.handlePreviewClick}
                updateCurrentSection={this.updateCurrentSection}
                />}
                {edit ? 
                <AddSectionForm handleFormSubmit={this.handleAddSectionSubmit} /> :
                <p className="start-editing">Don't like the sound of the previews? <Button buttonText={`Add to ${title}`} onButtonClick={this.handleBeginEditClick}/></p>}
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
        const previousSectionId = this.state.currentSection
        const newSection = {
            story: this.state.storyId,
            previousSection: previousSectionId,
            depth: this.state.storySections.length,
            text: storyText
        }
        const addSectionRequest = new Request('http://localhost:3001/story_section')
        addSectionRequest.post(newSection, (section) => {
            const updatedSectionsToRender = [...this.state.sectionsToRender, newSection]
            const updatedStoryTree = {...this.state.storySections}
            updatedStoryTree[newSection._id] = []
            updatedStoryTree[newSection.previousSection].push(newSection)
            this.setState({ 
                storySections: updatedStoryTree, 
                sectionsToRender: updatedSectionsToRender
            })
        })
    }

    handleForkButtonClick(event) {
        const index = 1 + Number(event.target.value)
        const newSectionArray = [...this.state.storySections].splice(0, index)
        this.setState({storySections: newSectionArray})
    }

    handleBeginEditClick(event) {
        this.setState({edit: true})
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