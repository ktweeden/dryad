import React, {Component} from 'react'
import './AddSectionForm.css'

class AddSectionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storyText: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <textarea cols="50" rows="10" 
                    value={this.state.storyText} 
                    onChange={this.handleChange}/>
                <input className="submit-button" type="submit" value="Add to story" />
            </form>
        )
    }

    handleChange(event) {
        this.setState({ storyText: event.target.value})
    }

    handleFormSubmit(event) {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.storyText)
        this.setState({storyText: ''})
    }
}

export default AddSectionForm