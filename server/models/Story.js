import mongoose from 'mongoose'
import StorySchema from '../schemas/Story'

const Story = mongoose.model('Story', StorySchema)

export default Story
