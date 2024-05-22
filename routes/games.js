const gamesRouter = require('express').Router();

const { sendAllGames, sendGameCreated, sendGameById } = require('../controlles/games');
const { findAllGames, createGame, findGameById } = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', createGame, sendGameCreated)
gamesRouter.get("/games/:id", findGameById, sendGameById);

module.exports = gamesRouter;
