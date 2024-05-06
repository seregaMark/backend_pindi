const gamesRouter = require('express').Router();

const sendAllGames = require('../controlles/games')

gamesRouter.get('/games', sendAllGames)

module.exports = gamesRouter;
