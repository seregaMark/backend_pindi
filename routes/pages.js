const pagesRouter = require("express").Router();
const { sendIndex, sendDashboard } = require("../controlles/auth");
const { checkCookiesJWT } = require("../middlewares/auth");

pagesRouter.get("/admin/**", checkCookiesJWT ,sendIndex,sendDashboard);  

module.exports = pagesRouter;