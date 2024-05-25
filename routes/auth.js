const { login } = require("../controlles/auth");
const authRouter = require("express").Router();

authRouter.post("/auth/login", login);

module.exports = authRouter;
