const gamesRouter = require('express').Router();

const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated } = require('../controlles/games');
const { findAllGames, createGame, findGameById, updateGame } = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', createGame, sendGameCreated)
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated);

module.exports = gamesRouter;
