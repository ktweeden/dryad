const mongoose = require('mongoose')

const StorySectionSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    story: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' },
    depth: Number,
    text: String
})

const StorySection = mongoose.model('StorySection', StorySectionSchema)


module.exports = StorySection