const usersRouter = require('express').Router();

const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controlles/users')
const {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmail,
    checkEmptyNameAndEmailAndPassword,
    checkIsUserExists,
    hashPassword,
} = require('../middlewares/users')
const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get(
    '/users',
    findAllUsers,
    sendAllUsers
);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.get(
    '/users',
    findUserById,
    sendUserById
);
usersRouter.delete(
    "/users/:id",
    deleteUser,
    sendUserDeleted
);
usersRouter.get(
    "/me",
    checkAuth,
    sendMe
);

module.exports = usersRouter;
