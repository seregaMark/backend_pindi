const gamesRouter = require('express').Router();

const { sendAllGames, sendGameCreated } = require('../controlles/games');
const { findAllGames, createGame } = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', createGame, sendGameCreated)

module.exports = gamesRouter;
