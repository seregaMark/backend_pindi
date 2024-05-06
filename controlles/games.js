const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.gmaesArray));
}

module.exports = sendAllGames;