import React, {Component} from 'react'
import Request from '../helpers/request.js'

class StoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }


    render() {
        return <h1>{this.state.message}</h1>
    }

    componentDidMount() {
        const messageRequest = new Request('http://localhost:3001')
        messageRequest.get(messageResponse => {
            this.setState({ message: messageResponse.message})  
        })
    }
}

export default StoryContainer