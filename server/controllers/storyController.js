const express = require('express')
const storyRouter = new express.Router()
const Story = require('../schemas/Story.js')

storyRouter.get('/', function(req, res) {
    Story.find(function(err, stories) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        };
        res.json(stories)
    })
})

storyRouter.post('/', function (req, res) {
    const newStory = new Story(req.body)
    newStory.save(function (err, story) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        };
        res.status(201);
        res.json(story);
    });
});


    
module.exports = storyRouter