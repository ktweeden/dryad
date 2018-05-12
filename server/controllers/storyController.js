const express = require('express')
const storyRouter = new express.Router()

const createStoryRouter = function(dbConnection) {


    return storyRouter
}

module.exports = createStoryRouter