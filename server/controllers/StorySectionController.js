const express = require('express')
const storySectionRouter = new express.Router()
const StorySection = require('../schemas/StorySection.js')

storySectionRouter.get('/', function (req, res) {
    StorySection.find(function (err, sections) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        };
        res.json(sections)
    })
})

storySectionRouter.get('/:id', function(req, res) {
    StorySection.findById(req.params.id, function (err, storySection) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        }
        res.json(storySection)
    })
})

storySectionRouter.post('/', function (req, res) {
    const newStorySection = new StorySection(req.body)
    newStorySection.save(function (err, storySection) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send();
            return;
        };
        res.status(201);
        res.json(storySection);
    });
});

storySectionRouter.delete('/', function (req, res) {
    StorySection.deleteMany(function (err) {
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

module.exports = storySectionRouter