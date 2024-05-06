const usersRouter = require('express').Router();

const sendAllUsers = require('../controlles/users')
const findAllUsers = require('../middlewares/users')

usersRouter.get('/users', findAllUsers, sendAllUsers)

module.exports = usersRouter;
