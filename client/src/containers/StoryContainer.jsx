import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StoryTitle from '../components/StoryTitle.jsx'
import StorySection from '../components/StorySection.jsx'
import StorySectionTier from '../components/StorySectionTier.jsx'
import './StoryContainer.css'
import EditWithAuth from '../components/EditWithAuth.jsx'
import EditWithoutAuth from '../components/EditWithoutAuth.jsx'
import withAuthentication from '../withAuthentication.jsx'

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
        this.handlePreviewClick = this.handlePreviewClick.bind(this)
        this.handleBeginEditClick = this.handleBeginEditClick.bind(this)
        this.handleSectionClick = this.handleSectionClick.bind(this)
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
            return <StorySection section={section} key={section._id} handleSectionClick={this.handleSectionClick}/>
        })

        return (      
            <section className="story-container">
                <StoryTitle title={title} />
                <StorySection section={startingSection} handleSectionClick={this.handleSectionClick}/>
                {sectionNodes}
                {(!edit && storySections[currentSection]) && <StorySectionTier 
                sectionArray={storySections[currentSection]} 
                handlePreviewClick={this.handlePreviewClick}
                updateCurrentSection={this.updateCurrentSection}
                />}
                {this.props.authUser ? 
                <EditWithAuth 
                    handleFormSubmit={this.handleAddSectionSubmit}
                    title={title}
                    onButtonClick={this.handleBeginEditClick}
                    edit={this.state.edit}/> : 
                <EditWithoutAuth title={title}/>}
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
        const getUserId = new Request(`http://localhost:3001/user/${this.props.authUser.uid}`)
        getUserId.get(user => {
            const newSection = {
                story: this.state.storyId,
                previousSection: previousSectionId,
                depth: (this.state.sectionsToRender.length +1),
                text: storyText,
                user: user._id
            }
            const addSectionRequest = new Request('http://localhost:3001/story_section')
            addSectionRequest.post(newSection, (section) => {
                const updatedSectionsToRender = [...this.state.sectionsToRender, section]
                const updatedStoryTree = { ...this.state.storySections }
                updatedStoryTree[section._id] = []
                updatedStoryTree[section.previousSection].push(section)
                this.setState({
                    storySections: updatedStoryTree,
                    sectionsToRender: updatedSectionsToRender
                })
            })
        })
    }

    handleSectionClick(section) {
        const updatedSectionsToRender = [...this.state.sectionsToRender]
        updatedSectionsToRender.splice(section.depth)
        this.setState({sectionsToRender: updatedSectionsToRender, currentSection: section._id})
    }

    handleBeginEditClick() {
        console.log('begin edit clicked');
        
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

export default withAuthentication(StoryContainer)