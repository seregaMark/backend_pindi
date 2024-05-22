const usersRouter = require('express').Router();

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controlles/users')
const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require('../middlewares/users')

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', createUser, sendUserCreated)
usersRouter.get('/users', findUserById, sendUserById);
usersRouter.put("/users/:id", updateUser, sendUserUpdated); 
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
