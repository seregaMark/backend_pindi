const categoriesRouter = require('express').Router();

const sendAllCategories = require('../controlles/categories')

categoriesRouter.get('/categories', sendAllCategories)

module.exports = categoriesRouter;
