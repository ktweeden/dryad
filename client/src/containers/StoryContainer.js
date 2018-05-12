import React, {Component} from 'react'
import Request from '../helpers/request.js'

class StoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            storySections: []
        }
    }


    render() {
        return <h1>{this.state.message}</h1>
    }

    // componentDidMount() {
    //     const storyRequest = new Request('http://localhost:3001/story')
    //     storyRequest.get(storyResponse => {
    //         this.setState({ title: story.title})  
    //     })
    // }
}

export default StoryContainer