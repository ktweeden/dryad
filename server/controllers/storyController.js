const express = require('express')
const storyRouter = new express.Router()
const Story = require('../schemas/Story.js')
const StorySection = require('../schemas/StorySection.js')

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

storyRouter.get('/:id', function(req, res) {
    Story.findById(req.params.id, function(err, story) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        }
        res.json(story)
    })
})

storyRouter.put('/:id', function(req, res) {
    Story.findByIdAndUpdate(req.params.id, req.body, function(err, story) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        }
        res.json(story)
    })
})

storyRouter.get('/:id/sections', function(req, res) {
    StorySection.find({story: req.params.id}, function(err, stories) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        }
        const orderedStories = orderStoriesByDepth(stories)
        res.json(orderedStories)
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

storyRouter.delete('/', function(req, res) {
    Story.deleteMany(function(err) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        };
        console.log('Everything has gone');
        res.status(204);
        res.send();
    })
})

const orderStoriesByDepth = function(storyArray) {
    const sortedStories = storyArray.sort((storya, storyb) => {
        if (storya.depth > storyb.depth) {
            return 1
        }
        else if (storya.depth < storyb.depth) {
            return -1
        }
        else {
            return 0
        }
    })
    return sortedStories
}

    
module.exports = storyRouter