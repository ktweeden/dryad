const express = require('express')
const userRouter = new express.Router()
const User = require('../schemas/User.js')


userRouter.post('/', function (req, res) {
  const newUser = new User(req.body)
  newUser.save(function (err, user) {
    if (err) {
      console.error(err)
      res.status(500)
      res.send()
      return
    }
    res.status(201)
    res.json(user)
  })
})

userRouter.delete('/', function (req, res) {
  User.deleteMany(function (err) {
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



module.exports = userRouter