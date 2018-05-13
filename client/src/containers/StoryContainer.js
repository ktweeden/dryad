import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StoryTitle from '../components/StoryTitle.js'
import StorySection from '../components/StorySection.js'
import AddSectionForm from '../components/AddSectionForm.js'

class StoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            storyId: null,
            storySections: []
        }
    }


    render() {
        const sectionNodes = this.state.storySections.map((section, index) => {
            return <StorySection 
            section={this.state.storySections[index]} 
            key={index}
            />
        })
        return (
            <React.Fragment>
                <StoryTitle title={this.state.title} />
                <div className="section-container">
                    {sectionNodes}
                </div>
                <AddSectionForm storyId={this.state.storyId} />
            </React.Fragment>
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
}

export default StoryContainer