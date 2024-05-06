const categoriesRouter = require('express').Router();

const sendAllCategories = require('../controlles/categories')
const findAllCategories = require('../middlewares/categories')

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)

module.exports = categoriesRouter;
