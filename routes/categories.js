const categoriesRouter = require('express').Router();

const { sendAllCategories, sendCategoryCreated } = require('../controlles/categories')
const { findAllCategories, createCategory } = require('../middlewares/categories')

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post('/categories', createCategory, sendCategoryCreated)

module.exports = categoriesRouter;
