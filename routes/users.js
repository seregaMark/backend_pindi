const usersRouter = require('express').Router();

const { sendAllUsers, sendUserCreated, sendUserById } = require('../controlles/users')
const { findAllUsers, createUser, findUserById } = require('../middlewares/users')

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', createUser, sendUserCreated)
usersRouter.get('/users', findUserById, sendUserById);

module.exports = usersRouter;
