import React, {Component} from 'react'
import Request from '../helpers/request.js'
import StorySection from './StorySection.jsx'

class AccountPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            sections: []
        }
    }

    render() {

        const sectionNodes = this.state.sections.map(section => {
            return <StorySection section={section} key={section._id}/>
        })

        return (
            <div className="account-page-container">
                <h2>Account</h2>
                <p>Welcome back {this.state.username}</p>
                {sectionNodes}
            </div>
        )
    }


    componentDidMount() {
        const userRequest = new Request(`http://localhost:3001/user/${this.props.authUser.uid}`)
        userRequest.get(user => {            
            this.setState({username: user.userName})
            const sectionRequest = new Request(`http://localhost:3001/story_section/user/${user._id}`)
            sectionRequest.get(sectionArray => {
                this.setState({sections: sectionArray})
            })
        })
    }

}



export default AccountPage