const gamesRouter = require('express').Router();

const sendAllGames = require('../controlles/games');
const findAllGames = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames)

module.exports = gamesRouter;
