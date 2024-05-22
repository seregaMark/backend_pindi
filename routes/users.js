const usersRouter = require('express').Router();

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controlles/users')
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmail, checkEmptyNameAndEmailAndPassword, checkIsUserExists } = require('../middlewares/users')

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);
usersRouter.get('/users', findUserById, sendUserById);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
