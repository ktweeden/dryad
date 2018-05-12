const express = require('express')
const router = new express.Router()
const storyRouter= require('./StoryController.js')
const storySectionRouter = require('./StorySectionController.js')


router.use('/story', storyRouter)
router.use('/story_section', storySectionRouter)


module.exports = router