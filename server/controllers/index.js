const express = require('express')
const router = new express.Router()
const createStoryController = require('./StoryController.js')
const createSectionController = require('./StorySectionController.js')


const createIndexRouter = function(dbConnection) {
    router.use('/story', createStoryController(dbConnection))
    router.use('/story_section', createStorySectionController(dbConnection))

    return router
}

module.exports = createIndexRouter