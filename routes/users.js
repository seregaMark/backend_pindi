const usersRouter = require('express').Router();

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require('../controlles/users')
const { findAllUsers, createUser, findUserById, updateUser } = require('../middlewares/users')

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', createUser, sendUserCreated)
usersRouter.get('/users', findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated); 

module.exports = usersRouter;
