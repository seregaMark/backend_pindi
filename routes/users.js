const usersRouter = require('express').Router();

const sendAllUsers = require('../controlles/users')

usersRouter.get('/users', sendAllUsers)

module.exports = usersRouter;
