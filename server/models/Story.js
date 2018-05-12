const mongoose = require ('mongoose')
const StorySchema = require ('../schemas/Story')

const Story = mongoose.model('Story', StorySchema)

module.exports =  Story
