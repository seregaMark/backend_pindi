const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");

const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages');
// const cors = require('./middlewares/cors');

const app = express();
const PORT = 3005;

connectToDatabase();

app.use(
  // cors, 
  cookieParser(), 
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);