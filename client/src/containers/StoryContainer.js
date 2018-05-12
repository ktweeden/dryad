import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StoryTitle from '../components/StoryTitle.js'

class StoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            storySections: []
        }
    }


    render() {
        return (
            <StoryTitle title={this.state.title} />
        )
    }

    componentDidMount() {
        const storyRequest = new Request('http://localhost:3001/story')
        storyRequest.get(storyResponse => {
            this.setState({ title: storyResponse[0].title})  
        })
    }
}

export default StoryContainer